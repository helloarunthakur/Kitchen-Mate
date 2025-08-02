import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import VideoCard from "../../components/VideoCard";
import Heading from "../../components/Heading";
import { recipeCategories } from "../../../utils/Fake";
import CategoryCard from "../../components/CategoryCard";
import RecentRecipeCard from "../../components/RecentRecipeCard";
import CreatorCard from "../../components/CreatorCard";
import Layout from "../../components/Layout";
import Search from "../../../assets/search.svg";

const Home = () => {
  const [activeCategory, setActiveCategory] = React.useState("Breakfast");
  return (
    <Layout>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View>
          <Text style={styles.text}>Find best recipes</Text>
          <Text style={styles.text}>for cooking</Text>
        </View>

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
              placeholder="Search recipes"
              style={styles.search}
              value=""
            />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Heading title="Trending now 🔥" SeeAllVisible={true} />
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 16,
                marginTop: 10,
                height: 245,
              }}
            >
              <View style={{ width: 280 }}>
                <VideoCard />
              </View>
              <View style={{ width: 280 }}>
                <VideoCard />
              </View>
              <View style={{ width: 280 }}>
                <VideoCard />
              </View>
            </ScrollView>
          </View>

          <Heading title="Popular category" SeeAllVisible={false} />
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
              {recipeCategories.map((item, index) => (
                <Text
                  style={[
                    { color: "#E23E3E" },
                    item.name == activeCategory && styles.activeCategory,
                  ]}
                  key={index * 8 + item.name}
                  onPress={() => setActiveCategory(item.name)}
                >
                  {item.name}
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
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </ScrollView>
          </View>
          <View>
            <Heading title="Recent recipes" SeeAllVisible={true} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16, marginTop: 10 }}
            >
              <RecentRecipeCard />
              <RecentRecipeCard />
              <RecentRecipeCard />
              <RecentRecipeCard />
            </ScrollView>
          </View>
          <View style={{ marginBottom: 30 }}>
            <Heading title="Popular creator" SeeAllVisible={true} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16, marginTop: 10 }}
            >
              <CreatorCard />
              <CreatorCard />
              <CreatorCard />
              <CreatorCard />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  search: {
    flexGrow: 1,
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
  whislist: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
});

export default Home;
