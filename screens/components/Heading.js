import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Heading = ({ title, SeeAllVisible = false }) => {
  return (
    <View style={styles.flex_row_space}>
      <Text style={styles.subText}>{title}</Text>
      {SeeAllVisible && (
        <TouchableOpacity style={styles.seeAllContainer}>
          <Text style={styles.seeAllText}>See all</Text>
          <Image
            source={require("../../assets/arrow.svg")}
            style={{ width: 12, height: 12, marginLeft: 4 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  flex_row_space: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  seeAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14,
    color: "#E23E3E",
  },
  subText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
