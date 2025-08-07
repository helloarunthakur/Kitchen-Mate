import React from "react";
import Layout from "../../components/Layout";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CreatorCard from "../../components/CreatorCard";
import { CreatorsFakeDB } from "../../../utils/Creators";
import Search from "../../../assets/search.svg";

const Creators = () => {
  const [search, setSearch] = React.useState("");
  const handleSearch = (value) => setSearch(value);
  return (
    <Layout>
      <View style={style.container}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>Creators</Text>
        <View style={{ paddingBottom: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
              padding: 5,
              gap: 8,
              marginTop: 12,
            }}
          >
            <Search style={{ marginLeft: 10 }} />
            <TextInput
              placeholder="Search creator"
              placeholderTextColor={"#C1C1C1"}
              style={{ flexGrow: 1 }}
              value={search}
              onChangeText={handleSearch}
            />
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            gap: 15,
            marginTop: 20,
            paddingBottom: 30,
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {CreatorsFakeDB.filter((creator) =>
            creator.name.includes(search)
          ).map((creator) => (
            <CreatorCard
              key={creator.id}
              title={creator.name}
              ImageURL={creator.image}
              UserId={creator.id}
            />
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Creators;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: -30,
  },
});
