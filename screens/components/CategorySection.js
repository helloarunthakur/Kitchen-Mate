import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { categoriesList } from "../../utils/DB";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
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
    <>
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 25,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          {categoriesList.map((item, index) => (
            <Text
              style={[
                { color: "#E23E3E" },
                item == activeCategory && styles.activeCategory,
              ]}
              key={index * 8 + item}
              onPress={() => setActiveCategory(item)}
            >
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 60, gap: 16 }}
        >
          {responseData.map((item) => (
            <CategoryCard
              key={item.idMeal}
              ImageURL={item.strMealThumb}
              title={item.strMeal}
              id={item.idMeal}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default CategorySection;

const styles = StyleSheet.create({
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
