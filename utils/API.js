export async function getRandomMeals(limit = 5) {
  const meals = [];
  const seen = new Set(); // to avoid duplicates

  for (let i = 0; i < limit; i++) {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      const meal = data.meals[0];

      // Only add if not already seen
      if (!seen.has(meal.idMeal)) {
        seen.add(meal.idMeal);
        meals.push(meal);
      } else {
        // if duplicate, try again by reducing i
        i--;
      }
    } catch (error) {
      console.error("Error fetching random meal:", error);
    }
  }

  return meals;
}
