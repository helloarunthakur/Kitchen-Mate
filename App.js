import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Splash from "./screens/components/Splash";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/pages/Home/Home";
import NavBar from "./screens/components/NavBar";
import Discover from "./screens/pages/Discover";
import Notifications from "./screens/pages/Notifications";
import ProfilePage from "./screens/pages/Profile";
import CreateRecipe from "./screens/pages/CreateRecipe";
import RecipeDetail from "./screens/pages/RecipeDetail";
import { getActiveRouteName, navigationRef } from "./screens/Hooks/navigation";

export default function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  const [currentRouteName, setCurrentRouteName] = useState("Home");
  const Stack = createNativeStackNavigator();
  const hideNavBar = ["RecipeDetail", "CreateRecipe"];
  const shouldHideNavbar = hideNavBar.includes(currentRouteName);
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 2000);
  }, []);
  if (splashScreen) {
    return <Splash />;
  }
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setCurrentRouteName(navigationRef.getCurrentRoute()?.name);
      }}
      onStateChange={(state) => {
        setCurrentRouteName(getActiveRouteName(state));
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="CreateRecipe"
          component={CreateRecipe}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#F1F1F1",
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetail}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
      {!shouldHideNavbar && <NavBar />}
    </NavigationContainer>
  );
}
