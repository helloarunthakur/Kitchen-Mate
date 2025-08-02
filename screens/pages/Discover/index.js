import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Layout from "../../components/Layout";
import VideoCard from "../../components/VideoCard";
import RecipeCard from "../../components/RecipeCard";

const Discover = () => {
  const menuItems = ["Video", "Recipe"];
  const [activeCategory, setActiveCategory] = React.useState("Video");
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>Saved Recipes</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          {menuItems.map((item, index) => (
            <Text
              style={[
                { color: "#E23E3E", textAlign: "center", flex: 1 },
                item == activeCategory && styles.activeCategory,
              ]}
              key={index * 8 + item}
              onPress={() => setActiveCategory(item)}
            >
              {item}
            </Text>
          ))}
        </View>
        <ScrollView contentContainerStyle={{ gap: 20, marginTop: 20 }}>
          {activeCategory === "Video" ? <VideoCard /> : <RecipeCard />}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  activeCategory: {
    color: "white",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    fontWeight: "bold",
    backgroundColor: "#E23E3E",
  },
});
