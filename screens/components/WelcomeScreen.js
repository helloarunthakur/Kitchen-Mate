import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import WelcomeImage from "../../assets/welcomeImage.svg";
import Star from "../../assets/Star.svg";
import Arrow from "../../assets/Arrow-Right.svg";
import BlackEffect from "../../assets/blackEffect.svg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const handleStartClick = async () => {
    await AsyncStorage.setItem("firstOpen", "false");
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <WelcomeImage
        width={"100%"}
        height={"100%"}
        preserveAspectRatio="xMidYMid slice"
        style={StyleSheet.absoluteFill}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 500,
        }}
      >
        <BlackEffect
          width={"100%"}
          height={"100%"}
          preserveAspectRatio="xMidYMid slice"
          style={StyleSheet.absoluteFill}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: 80,
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Star />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          60K + <Text style={{ fontWeight: "normal" }}>Premium Recipes</Text>
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 80,
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
          width: 300,
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Let’s Cooking
        </Text>
        <Text style={{ color: "white" }}>Find best recipes for cooking</Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#E23E3E",
            width: 200,
            height: 50,
            padding: 10,
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={handleStartClick}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Start cooking
          </Text>
          <Arrow style={{ fill: "white" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
