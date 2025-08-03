import { useEffect } from "react";
import { Image, StatusBar, View } from "react-native";
import splash from "../../assets/splash.png";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash() {
  const navigation = useNavigation();
  const handleNavigate = async () => {
    try {
      const firstOpen = await AsyncStorage.getItem("firstOpen");
      if (firstOpen === null || firstOpen == "true") {
        navigation.navigate("WelcomeScreen");
        await AsyncStorage.setItem("firstOpen", "true");
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.warn("Error reading/writing firstOpen flag", e);
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleNavigate();
    }, 2000);
  }, []);

  return (
    <View className="flex items-center justify-center h-screen w-screen bg-orange-500 ">
      <StatusBar barStyle={"default"} animated />
      <Image source={splash} height={20} width={20} />
    </View>
  );
}
