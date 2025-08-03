import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CreatorCard = ({ title, ImageURL, UserId }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("ProfilePage", { userId: UserId });
  };
  const uri = `https://api.dicebear.com/6.x/adventurer/png?seed=${encodeURIComponent(
    title
  )}&size=128`;
  return (
    <TouchableOpacity style={{ width: 80 }} onPress={handlePress}>
      {ImageURL && (
        <Image
          source={{ uri: uri }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: "#D9D9D9",
          }}
        />
      )}
      {!ImageURL && (
        <View
          style={{
            height: 80,
            width: 80,
            backgroundColor: "#C1C1C1",
            borderRadius: 50,
          }}
        />
      )}

      <Text
        style={{
          marginTop: 5,
          textAlign: "center",
          fontSize: 12,
          color: "#797979",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CreatorCard;
