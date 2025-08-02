import React from "react";
import { Image, Text, View } from "react-native";
import Star from "../../assets/Star.svg";
import Wishlist from "../../assets/wishlist.svg";
import Playbtn from "../../assets/playbtn.svg";

const VideoCard = () => {
  return (
    <View style={{ height: 240 }}>
      <View style={{ position: "relative" }}>
        <Image
          source={require("../../assets/VideoZeroth.png")}
          height={180}
          style={{ width: "100%", height: 180, borderRadius: 10 }}
        />
        <View
          style={{
            height: 50,
            width: 50,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: -20 }, { translateY: -20 }],
            backgroundColor: "#E23E3E",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Playbtn />
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
          <Wishlist />
        </View>
        <View
          style={{
            position: "absolute",
            top: 10,
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
            <Text style={{ color: "white", fontWeight: "bold" }}>4.5</Text>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 5 }}>
        <Text style={{ fontWeight: "semibold", marginBottom: 5, marginTop: 5 }}>
          Video Title
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Image
            source={require("../../assets/userImage.png")}
            style={{ width: 24, height: 24, borderRadius: 50 }}
          />
          <Text style={{ color: "#A9A9A9" }}>By xyz</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
