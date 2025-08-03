import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Wishlist from "../../assets/wishlist.svg";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ title, ImageURL }) => {
  const navigatation = useNavigation();
  const handlePress = () => {
    navigatation.navigate("RecipeDetail");
  };
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "#D9D9D9",
        height: 200,
        width: 150,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={handlePress}
    >
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          {title}
        </Text>
      </View>
      {ImageURL && (
        <Image
          source={{ uri: ImageURL }}
          style={{
            position: "absolute",
            top: "-30%",
            height: 110,
            width: 110,
            borderRadius: 100,
            resizeMode: "cover",
          }}
        />
      )}

      {!ImageURL && (
        <View
          style={{
            position: "absolute",
            top: "-30%",
            height: 110,
            width: 110,
            borderRadius: 100,
            backgroundColor: "#D9D9D9",
          }}
        />
      )}

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
    </TouchableOpacity>
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
