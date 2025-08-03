import React from "react";
import Layout from "../../components/Layout";
import { StyleSheet, Text, View } from "react-native";
import StarGolden from "../../../assets/Star-golden.svg";

const RecipeDetail = () => {
  return (
    <Layout>
      <View style={styles.container}>
        {/* Heading */}
        <Text style={{ fontSize: 32, fontWeight: "bold", marginVertical: 10 }}>
          How to make french toast
        </Text>
        {/* Recipe Card */}
        <View
          style={{ height: 200, backgroundColor: "#D9D9D9", borderRadius: 10 }}
        ></View>
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
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Roberta Anny
              </Text>
              <Text>Bali, Indonesia</Text>
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
        <View style={{ marginTop: 20 }}>
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
            <Text>5 Items</Text>
          </View>
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
              <Text style={{ fontWeight: "bold" }}>2 eggs</Text>
            </View>
            <Text style={{ fontWeight: "normal", color: "#C1C1C1" }}>200g</Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default RecipeDetail;

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
