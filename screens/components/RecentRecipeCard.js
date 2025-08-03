import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const RecentRecipeCard = () => {
  const navigatation = useNavigation();
  const handlePress = () => {
    navigatation.navigate("RecipeDetail");
  };
  return (
    <TouchableOpacity style={{ width: 125 }} onPress={handlePress}>
      <View
        style={{
          height: 125,
          width: 125,
          borderRadius: 10,
          backgroundColor: "#C1C1C1",
        }}
      ></View>
      <Text style={{ marginTop: 5, marginBottom: 5, marginLeft: 2 }}>
        Indonesian beef burger
      </Text>
      <Text style={{ fontSize: 12, color: "#C1C1C1", marginLeft: 2 }}>
        By Adrianna curl
      </Text>
    </TouchableOpacity>
  );
};

export default RecentRecipeCard;
