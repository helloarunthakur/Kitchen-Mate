import React from "react";
import { Text, View } from "react-native";
import Paper from "../../assets/Paper-green.svg";

const NotificationCard = ({ title, description, seen = false }) => {
  return (
    <View
      style={{
        backgroundColor: "#D9D9D9",
        height: 85,
        padding: 10,
        borderRadius: 10,
        position: "relative",
      }}
    >
      {/* New Notification Badge */}
      {!seen && (
        <View
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            height: 8,
            width: 8,
            backgroundColor: "#E23E3E",
            borderRadius: 10,
          }}
        />
      )}

      {/* Notification Content */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            height: 30,
            width: 30,
            backgroundColor: "#CEECD7",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper />
        </View>
        <View>
          <Text
            style={{
              color: "#303030",
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            {title || "Sample Notification Title"}
          </Text>
          <Text style={{ width: 300, color: "#A9A9A9" }}>
            {description || "Sample notification description goes here. "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
