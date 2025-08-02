import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Layout from "../../components/Layout";
import Filter from "../../../assets/Filter.svg";
import NotificationCard from "../../components/NotificationCard";
import { NotificationsData } from "../../../utils/Fake";

const Notifications = () => {
  const menuItems = ["All", "Unread", "Read"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  return (
    <Layout>
      <View style={styles.container}>
        {/* Heading */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.heading}>Notifications</Text>
          <Filter />
        </View>

        {/* Notification Menus */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          {menuItems.map((item, index) => (
            <Text
              style={[
                { color: "#E23E3E", textAlign: "center", flex: 1 },
                item == activeCategory && styles.activeCategory,
              ]}
              key={index * 8 + item}
              onPress={() => setActiveCategory(item)}
            >
              {item}
            </Text>
          ))}
        </View>

        {/* Notification List */}
        <ScrollView contentContainerStyle={{ gap: 10, paddingTop: 20 }}>
          {NotificationsData.map((notification) => {
            return (
              <View
                key={notification.id + notification.time}
                style={{ gap: 10 }}
              >
                <Text style={{ fontWeight: "bold" }}>{notification.time}</Text>
                {notification.messages.map((message) => {
                  return <NotificationCard key={message.id} {...message} />;
                })}
              </View>
            );
          })}
          <Text
            style={{ textAlign: "center", marginTop: 10, color: "#A9A9A9" }}
          >
            You're all caught up
          </Text>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
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
