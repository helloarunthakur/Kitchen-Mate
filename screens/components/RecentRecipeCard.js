import React from "react";
import { Text, View } from "react-native";

const RecentRecipeCard = () => {
  return (
    <View style={{ width: 125 }}>
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
    </View>
  );
};

export default RecentRecipeCard;
