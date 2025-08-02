import React from "react";
import { Text, View } from "react-native";

const CreatorCard = () => {
  return (
    <View style={{ width: 80 }}>
      <View
        style={{
          height: 80,
          width: 80,
          backgroundColor: "#C1C1C1",
          borderRadius: 50,
        }}
      ></View>
      <Text
        style={{
          marginTop: 5,
          textAlign: "center",
          fontSize: 12,
          color: "#797979",
        }}
      >
        Adrianna curl
      </Text>
    </View>
  );
};

export default CreatorCard;
