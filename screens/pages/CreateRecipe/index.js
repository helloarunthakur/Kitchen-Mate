import React from "react";
import Layout from "../../components/Layout";
import { StyleSheet, Text, TextInput, View } from "react-native";
import EditPenSolid from "../../../assets/EditPen-Solid.svg";
import TwoUser from "../../../assets/2-User.svg";
import Clock from "../../../assets/clock.svg";

import DynamicButtonCreateRecipe from "../../components/DynamicButtonCreateRecipe";
import Heading from "../../components/Heading";
import AddBtn from "../../../assets/add.svg";
import RemoveBtn from "../../../assets/remove.svg";

const CreateRecipe = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Create Recipe</Text>
        </View>
        <View>
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "#C1C1C1",
              borderRadius: 10,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 35,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 50,
            }}
          >
            <EditPenSolid />
          </View>
        </View>

        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <TextInput
            placeholder="Recipe Name"
            placeholderTextColor={"#C1C1C1"}
            style={{
              height: 45,
              borderColor: "red",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
            }}
          />
        </View>

        <View style={{ gap: 10 }}>
          <DynamicButtonCreateRecipe
            title={"Serves"}
            value={"2"}
            Icon={TwoUser}
          />
          <DynamicButtonCreateRecipe
            title={"Cook Time"}
            value={"45 min"}
            Icon={Clock}
          />
        </View>

        <View>
          <Heading title={"Ingredients"} SeeAllVisible={false} />
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <TextInput
              placeholder="Item Name"
              placeholderTextColor={"#C1C1C1"}
              style={{
                borderColor: "#D9D9D9",
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                flexGrow: 1,
              }}
            />
            <TextInput
              placeholder="Quantity"
              style={{
                borderColor: "#D9D9D9",
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                width: 120,
              }}
            />
            <RemoveBtn />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <TextInput
              placeholder="Item Name"
              placeholderTextColor={"#C1C1C1"}
              style={{
                borderColor: "#D9D9D9",
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                flexGrow: 1,
              }}
              editable={false}
            />
            <TextInput
              placeholder="Quantity"
              placeholderTextColor={"#C1C1C1"}
              style={{
                borderColor: "#D9D9D9",
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 10,
                width: 120,
              }}
              editable={false}
            />
            <AddBtn />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                textAlign: "center",
                height: 55,
                backgroundColor: "#E23E3E",
                color: "#FFFFFF",
                borderRadius: 10,
                paddingVertical: 15,
                justifyContent: "center",
                alignItems: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Save my recipe
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default CreateRecipe;

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
