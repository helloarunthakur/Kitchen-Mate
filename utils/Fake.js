export const recipeCategories = [
  { id: 1, name: "Breakfast" },
  { id: 2, name: "Lunch" },
  { id: 3, name: "Dinner" },
  { id: 4, name: "Desserts" },
  { id: 5, name: "Snacks" },
  { id: 6, name: "Drinks" },
  { id: 7, name: "Vegan" },
  { id: 8, name: "Healthy" },
];

export const NotificationsData = [
  {
    id: 1,
    time: "Today",
    messages: [
      {
        id: 1,
        title: "New recipe!",
        description:
          "Far far away, behind the word mountains, far from the countries.",
        icon: "Paper",
        seen: false,
      },
      {
        id: 2,
        title: "New comment on your recipe",
        description: "John Doe commented on your recipe.",
        icon: "Comment",
        seen: false,
      },
    ],
  },
  {
    id: 2,
    time: "Yesterday",
    messages: [
      {
        id: 3,
        title: "New follower!",
        description: "Jane Doe started following you.",
        icon: "User",
        seen: true,
      },
      {
        id: 4,
        title: "Recipe approved!",
        description: "Your recipe has been approved by the admin.",
        icon: "Check",
        seen: true,
      },
    ],
  },
];
