import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import VideoCard from "../../components/VideoCard";
import Heading from "../../components/Heading";
import CategoryCard from "../../components/CategoryCard";
import RecentRecipeCard from "../../components/RecentRecipeCard";
import CreatorCard from "../../components/CreatorCard";
import Layout from "../../components/Layout";
import Search from "../../../assets/search.svg";
import { categoriesList } from "../../../utils/DB";
import TrendingNow from "../../components/TrendingNow";
import CategorySection from "../../components/CategorySection";
import { CreatorsFakeDB } from "../../../utils/Creators";

const Home = () => {
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
            <TrendingNow />
          </View>

          <Heading title="Popular category" SeeAllVisible={false} />
          <CategorySection />

          {/* <View>
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
          </View> */}

          <View style={{ marginBottom: 30, marginTop: 10 }}>
            <Heading title="Popular creator" SeeAllVisible={true} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 16, marginTop: 16 }}
            >
              {CreatorsFakeDB.slice(0, 10).map((creator) => (
                <CreatorCard
                  key={creator.id}
                  title={creator.name}
                  ImageURL={creator.image}
                  UserId={creator.id}
                />
              ))}
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
