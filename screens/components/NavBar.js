import React, { useState } from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import Bg from "../../assets/Bg.svg";
import Home from "../../assets/Home.svg";
import HomeSolid from "../../assets/Home-solid.svg";
import Wishlist from "../../assets/wishlist.svg";
import WishlistSolid from "../../assets/wishlist-solid.svg";
import Notification from "../../assets/notification.svg";
import NotificationSolid from "../../assets/notification-solid.svg";
import User from "../../assets/user.svg";
import UserSolid from "../../assets/user-solid.svg";
import Create from "../../assets/create.svg";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const NavBar = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { name: "home", icon: Home, iconActive: HomeSolid, screen: "Home" },
    {
      name: "wishlist",
      icon: Wishlist,
      iconActive: WishlistSolid,
      screen: "Discover",
    },
    {
      name: "notification",
      icon: Notification,
      iconActive: NotificationSolid,
      screen: "Notifications",
    },
    { name: "user", icon: User, iconActive: UserSolid, screen: "ProfilePage" },
  ];

  return (
    <View style={{ width: "100%", backgroundColor: "#F1F1F1" }}>
      <Bg width={width} height={100} preserveAspectRatio="xMidYMid slice" />

      {/* Floating Create Icon */}
      <View
        style={{
          position: "absolute",
          top: -75,
          left: 0,
          right: 0,
          transform: [{ translateY: 50 }],
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Create
          height={60}
          width={60}
          onPress={() => {
            navigation.navigate("CreateRecipe");
            setActiveTab("CreateRecipe");
          }}
        />
      </View>

      {/* Tab Icons */}
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          top: 10,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        {tabs.map((tab) => {
          const IconComponent =
            activeTab === tab.name ? tab.iconActive : tab.icon;

          return (
            <TouchableOpacity
              key={tab.name}
              onPress={() => {
                setActiveTab(tab.name);
                if (tab.screen) navigation.navigate(tab.screen);
              }}
              style={[
                {
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                },
                tab.name === "wishlist" ? { paddingRight: 50 } : {},
                tab.name === "notification" ? { paddingLeft: 50 } : {},
              ]}
            >
              <IconComponent />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default NavBar;
