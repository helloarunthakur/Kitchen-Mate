import React, { act, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../../components/Layout";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { iconCategories } from "../../../utils/DB";
import CategoryCard from "../../components/CategoryCard";

const iconPacks = {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
};

const Category = () => {
  const [activeCategory, setActiveCategory] = React.useState("Breakfast");
  const [responseData, setResponseData] = React.useState([]);
  const getRecipeByCategory = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
      );
      const data = await res.json();
      setResponseData(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipeByCategory();
  }, [activeCategory]);
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.text}>Hey 👋 I want ...</Text>
        <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 25 }}
          >
            {iconCategories.map((category) => {
              const Icon = iconPacks[category.iconPack];
              return (
                <TouchableOpacity
                  key={category.id}
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                  onPress={() => setActiveCategory(category.name)}
                >
                  <Icon
                    name={category.icon}
                    size={35}
                    color={
                      activeCategory == category.name ? "tomato" : "#A9A9A9"
                    }
                  />
                  <Text
                    style={{
                      color:
                        activeCategory == category.name ? "tomato" : "#A9A9A9",
                    }}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <ScrollView
          contentContainerStyle={{
            gap: 40,
            paddingTop: 30,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {responseData?.map((item) => (
            <View
              style={{ height: 150, width: 150, marginVertical: 10 }}
              key={item.idMeal}
            >
              <CategoryCard
                ImageURL={item.strMealThumb}
                title={item.strMeal}
                id={item.idMeal}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: -30,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
