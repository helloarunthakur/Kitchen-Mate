import React from "react";
import Layout from "../../components/Layout";
import { StyleSheet, Text } from "react-native";

const RecipeDetail = () => {
  return (
    <Layout>
      <Text>Recipe Detail</Text>
    </Layout>
  );
};

export default RecipeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
