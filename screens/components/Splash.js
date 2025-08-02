import React from "react";
import { Image, StatusBar, View } from "react-native";
import splash from "../../assets/splash.png";
export default function Splash() {
  return (
    <View className="flex items-center justify-center h-screen w-screen bg-orange-500 ">
      <StatusBar barStyle={"default"} animated />
      <Image source={splash} height={20} width={20} />
    </View>
  );
}
