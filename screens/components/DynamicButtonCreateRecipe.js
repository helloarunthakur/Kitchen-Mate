import React from "react";
import { Text, View } from "react-native";
import Arrow from "../../assets/arrow.svg";

const DynamicButtonCreateRecipe = ({
  Icon = null,
  title,
  onPress = () => {},
  value,
}) => {
  return (
    <View
      style={{
        height: 60,
        width: "100%",
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
      }}
      onPress={onPress}
    >
      <View
        style={{
          height: 36,
          width: 36,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          flexGrow: 1,
          paddingLeft: 10,
        }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ color: "#A9A9A9", fontWeight: "bold", fontSize: 12 }}>
          {value}
        </Text>
        <Arrow />
      </View>
    </View>
  );
};

export default DynamicButtonCreateRecipe;
