import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import VideoCard from "./VideoCard";
import { getRandomMeals } from "../../utils/API";

const TrendingNow = () => {
  const [Trending, setTrending] = React.useState([]);
  const getTrendingRecipies = async () => {
    const meals = await getRandomMeals(6);
    setTrending(meals);
  };
  useEffect(() => {
    Trending.length === 0 && getTrendingRecipies();
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 16,
        marginTop: 10,
        height: 235,
      }}
    >
      {Trending.map((item) => (
        <View style={{ width: 280 }} key={item.idMeal}>
          <VideoCard ImageURL={item.strMealThumb} title={item.strMeal} />
        </View>
      ))}
    </ScrollView>
  );
};

export default TrendingNow;
