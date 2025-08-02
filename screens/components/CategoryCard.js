import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Wishlist from "../../assets/wishlist.svg";

const CategoryCard = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "#C1C1C1",
        height: 200,
        width: 150,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>Breakfast</Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: "-30%",
          height: 110,
          width: 110,
          borderRadius: 100,
          backgroundColor: "#D9D9D9",
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          flex: 1,
          width: 150,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>20 Mins</Text>
        <View style={styles.whislist}>
          <Wishlist />
        </View>
      </View>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#C1C1C1",
    height: 200,
    width: 150,
    borderRadius: 10,
  },
  whislist: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
});
