import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

const Layout = ({ children }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: StatusBar.currentHeight || 20 }}
    >
      <View style={{ flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
