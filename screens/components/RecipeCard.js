import React from "react";
import { Image, Text, View } from "react-native";
import ThreeDot from "../../assets/3dot.svg";
import Star from "../../assets/Star.svg";

const RecipeCard = () => {
  return (
    <View style={{ height: 200 }}>
      <View style={{ position: "relative" }}>
        <Image
          source={require("../../assets/VideoZeroth.png")}
          height={200}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />
        <View
          style={{
            width: 230,
            position: "absolute",
            bottom: 20,
            left: 20,
            borderRadius: 50,
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            How to make Italian Spaghetti at home
          </Text>
          <Text style={{ fontSize: 12, color: "white", marginTop: 10 }}>
            12 Ingredients | 30 Mins
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 32,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: 50,
          }}
        >
          <ThreeDot />
        </View>
        <View
          style={{
            position: "absolute",
            top: 5,
            left: 10,
            width: 32,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Star />
            <Text style={{ fontSize: 12, color: "white", fontWeight: "bold" }}>
              5.0
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecipeCard;
