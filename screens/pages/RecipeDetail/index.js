import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import StarGolden from "../../../assets/Star-golden.svg";
import { useRoute } from "@react-navigation/native";
import { getRecipeById } from "../../../utils/API";

const RecipeDetail = () => {
  const [recipe, setRecipe] = React.useState(null);
  const [ingredients, setIngredients] = React.useState([]);
  const route = useRoute();
  const id = route.params?.id;

  function extractIngredients(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]?.trim();
      const measure = meal[`strMeasure${i}`]?.trim();

      if (ingredient && ingredient !== "") {
        ingredients.push({
          ingredient,
          measure: measure || "",
        });
      }
    }

    return ingredients;
  }
  const getRecipeDetailsFn = async () => {
    getRecipeById(id).then((res) => {
      setRecipe(res);
      let ingredients = extractIngredients(res);
      setIngredients(ingredients);
    });
  };
  useEffect(() => {
    getRecipeDetailsFn();
  }, [id]);
  return (
    <Layout>
      <ScrollView style={styles.container}>
        {/* Heading */}
        <Text style={{ fontSize: 32, fontWeight: "bold", marginVertical: 10 }}>
          {recipe?.strMeal}
        </Text>
        {/* Recipe Card */}
        {recipe?.strMealThumb && (
          <Image
            source={{ uri: recipe?.strMealThumb }}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
          />
        )}
        {!recipe?.strMealThumb && (
          <View
            style={{
              height: 200,
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
            }}
          ></View>
        )}

        {/* Recipe Detail */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <StarGolden />
          <Text>4.5</Text>
          <Text style={{ color: "#C1C1C1" }}>300 Reviews</Text>
        </View>
        {/* Recipe Creator */}
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#D9D9D9",
                borderRadius: 100,
              }}
            />
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Username</Text>
              <Text>Location</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#E23E3E",
              width: 100,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>Follow</Text>
          </View>
        </View>
        {/* Ingredients */}
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
              Ingredients
            </Text>
            <Text>{ingredients?.length} Items</Text>
          </View>
          <>
            {ingredients.map((item, index) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                  backgroundColor: "#D9D9D9",
                  padding: 10,
                  borderRadius: 10,
                }}
                key={index * 43 + item?.ingredient}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      backgroundColor: "#C1C1C1",
                      borderRadius: 10,
                    }}
                  />
                  <Text style={{ fontWeight: "bold" }}>{item?.ingredient}</Text>
                </View>
                <Text style={{ fontWeight: "normal", color: "#C1C1C1" }}>
                  {item?.measure}g
                </Text>
              </View>
            ))}
          </>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: -30,
    marginBottom: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
