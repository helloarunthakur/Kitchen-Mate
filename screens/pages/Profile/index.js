import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../../components/Layout";
import ThreeDot from "../../../assets/3dot.svg";
import RecipeCard from "../../components/RecipeCard";
import VideoCard from "../../components/VideoCard";

const ProfilePage = () => {
  const [currentTab, setCurrentTab] = React.useState("Recipe");
  const menuItems = ["Video", "Recipe"];
  return (
    <Layout>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.heading}>My Profile</Text>
          <ThreeDot />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: "100%" }}
        >
          {/* Profile Content */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
              marginRight: 10,
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                backgroundColor: "#C1C1C1",
              }}
            />
            <Text
              style={{
                fontSize: 12,
                borderColor: "red",
                fontWeight: "bold",
                color: "#E23E3E",
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
              }}
            >
              Edit profile
            </Text>
          </View>

          {/* Profile Details */}
          <View style={{ marginTop: 20, gap: 10, width: "280" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Alessandra Blair
            </Text>
            <Text>
              Hello world I’m Alessandra Blair, I’m from Italy 🇮🇹 I love cooking
              so much!
            </Text>
          </View>

          {/* Profile Stats */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 30,
              marginTop: 30,
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.statsText}>Recipe</Text>
              <Text style={styles.statsValue}>3</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.statsText}>Videos</Text>
              <Text style={styles.statsValue}>13</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.statsText}>Followers</Text>
              <Text style={styles.statsValue}>13K</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.statsText}>Following</Text>
              <Text style={styles.statsValue}>132</Text>
            </View>
          </View>

          {/* Recent Activities */}
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
                  item == currentTab && styles.activeCategory,
                ]}
                key={index * 8 + item}
                onPress={() => setCurrentTab(item)}
              >
                {item}
              </Text>
            ))}
          </View>

          {/* Recent Activity Cards */}

          <View style={{ marginTop: 20, gap: 20 }}>
            {currentTab === "Video" ? <VideoCard /> : <RecipeCard />}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  statsText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#A9A9A9",
    marginBottom: 8,
  },
  statsValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#303030",
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
