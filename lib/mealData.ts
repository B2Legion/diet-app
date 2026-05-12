export type MealTag = "fat-loss" | "recovery" | "treat";

export interface Meal {
  name: string;
  note?: string;
  tag: MealTag;
}

export interface DayPlan {
  day: string;
  theme: string;
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  snacks: Meal[];
}

export const mealPlan: DayPlan[] = [
  {
    day: "Monday",
    theme: "The Fresh Start",
    breakfast: [
      { name: "3 Idlis + 1 Vada + Sambar", note: "High protein, fermented for gut health", tag: "fat-loss" },
      { name: "Poha with Extra Peanuts", note: "Add lemon for iron absorption", tag: "fat-loss" },
      { name: "Aloo Paratha + Curd", note: "Curd gives a morning dose of B12", tag: "recovery" },
      { name: "Oatmeal/Muesli Bowl", note: "Top with seeds for Omega-3s", tag: "fat-loss" },
      { name: "Sabudana Khichdi", note: "Light on stomach, great for energy", tag: "recovery" },
    ],
    lunch: [
      { name: "Homestyle Rajma Chawal", note: "Kidney beans are excellent for iron and protein", tag: "recovery" },
      { name: "Palak Paneer Thali", note: "Spinach for iron, Paneer for B12", tag: "fat-loss" },
      { name: "Sambar Rice Bowl + Buttermilk", note: "Hydrating and comforting", tag: "fat-loss" },
      { name: "Healthy Millet Bowl", note: "Millets give sustained energy", tag: "fat-loss" },
      { name: "Chole + 2 Kulchas", note: "Chickpeas rich in zinc, stops hair fall", tag: "recovery" },
    ],
    dinner: [
      { name: "Moong Dal Khichdi + Ghee", note: "Ghee helps absorb Vitamin D; ensures deep sleep", tag: "fat-loss" },
      { name: "Veg Hakka Noodles", note: "Ask for less soy sauce, extra veggies", tag: "recovery" },
      { name: "Paneer & Veggie Wrap", note: "Whole wheat base if possible", tag: "fat-loss" },
      { name: "Cream of Mushroom Soup + Garlic Bread", note: "Mushrooms are a veg source of Vitamin D", tag: "recovery" },
      { name: "Dal Tadka + Jeera Rice", tag: "fat-loss" },
    ],
    snacks: [
      { name: "Roasted Chana + 4 Walnuts", note: "Omega-3s + protein", tag: "fat-loss" },
      { name: "Buttermilk / Chaas", note: "Great for hydration and gut health", tag: "fat-loss" },
    ],
  },
  {
    day: "Tuesday",
    theme: "South Indian & Protein Power",
    breakfast: [
      { name: "Masala Dosa + Coconut Chutney", tag: "fat-loss" },
      { name: "Vegetable Upma", note: "Packed with veggies, easy on digestion", tag: "fat-loss" },
      { name: "Grilled Paneer Sandwich", tag: "fat-loss" },
      { name: "Smoothie Bowl", note: "Mixed berry or green smoothie for vitamins", tag: "fat-loss" },
      { name: "Gobi Paratha + Pickle", tag: "recovery" },
    ],
    lunch: [
      { name: "Dal Makhani + Brown/Jeera Rice", note: "Ask for less cream", tag: "recovery" },
      { name: "Bisi Bele Bath + Boondi Raita", note: "Lentils and rice for ultimate nutrition", tag: "fat-loss" },
      { name: "Paneer Tikka Salad Bowl", note: "Massive protein, low carbs", tag: "fat-loss" },
      { name: "Authentic South Indian Thali", note: "Balanced with rice, dal, veggies, and curd", tag: "fat-loss" },
      { name: "Veg Pulao + Cucumber Raita", tag: "fat-loss" },
    ],
    dinner: [
      { name: "Roasted Tomato Soup + Cheese Sandwich", tag: "fat-loss" },
      { name: "Curd Rice", note: "Ultimate cooling dinner for headache relief + B12 boost", tag: "fat-loss" },
      { name: "Mixed Veg Manchurian + Fried Rice", tag: "treat" },
      { name: "Paneer Bhurji + 2 Rotis", tag: "fat-loss" },
      { name: "Ragi Mudde + Sambar", note: "Ragi loaded with iron and calcium for hair strength", tag: "fat-loss" },
    ],
    snacks: [
      { name: "Fruit Bowl (banana, guava, apple)", note: "Natural energy + vitamins", tag: "fat-loss" },
      { name: "Makhana (Fox Nuts)", note: "Low calorie, high protein", tag: "fat-loss" },
    ],
  },
  {
    day: "Wednesday",
    theme: "Mid-Week Vitamin Boost",
    breakfast: [
      { name: "Set Dosa + Sagu (Veg Curry)", tag: "fat-loss" },
      { name: "Methi Paratha", note: "Methi is famous for stopping hair loss", tag: "fat-loss" },
      { name: "Vermicelli (Shavige) Upma", tag: "fat-loss" },
      { name: "Fruit & Yogurt Parfait", note: "Excellent for B12 and Vitamin C", tag: "fat-loss" },
      { name: "Pongal", note: "Ghee rice and lentils", tag: "recovery" },
    ],
    lunch: [
      { name: "Mushroom Masala + 2 Rotis", note: "Double dose of Vitamin D", tag: "fat-loss" },
      { name: "Kadhi Pakora + Rice", note: "Yogurt-based curry, excellent for gut health and B12", tag: "recovery" },
      { name: "Quinoa & Roasted Veg Salad Bowl", tag: "fat-loss" },
      { name: "Veg Dum Biryani + Salan", tag: "recovery" },
      { name: "Gatte ki Sabzi Thali", note: "Gram flour dumplings, high in protein", tag: "recovery" },
    ],
    dinner: [
      { name: "Lemon Coriander Soup + Veg Momos", note: "Hydrating and rich in Vitamin C", tag: "fat-loss" },
      { name: "Aloo Matar + 2 Phulkas", tag: "fat-loss" },
      { name: "Spinach & Corn Sandwich", tag: "fat-loss" },
      { name: "Veggie Kathi Roll", tag: "fat-loss" },
      { name: "Dal Palak + Rice", tag: "fat-loss" },
    ],
    snacks: [
      { name: "Sprouts Chaat", note: "Protein powerhouse + iron", tag: "fat-loss" },
      { name: "Cucumber + Hummus", note: "Zinc from chickpeas", tag: "fat-loss" },
    ],
  },
  {
    day: "Thursday",
    theme: "Comfort & Hydration",
    breakfast: [
      { name: "Rava Idli + Sambar", tag: "fat-loss" },
      { name: "Mixed Veg Poha", tag: "fat-loss" },
      { name: "Cheese, Corn & Capsicum Sandwich", tag: "recovery" },
      { name: "Ragi Dosa", note: "Great way to sneak in Ragi for hair health", tag: "fat-loss" },
      { name: "Fresh Watermelon Juice + Avocado/Butter Toast", tag: "fat-loss" },
    ],
    lunch: [
      { name: "Chana Masala (Black Chickpeas) Thali", note: "One of the highest vegetarian sources of iron", tag: "fat-loss" },
      { name: "Paneer Butter Masala + 2 Rotis", note: "Ask for less butter", tag: "recovery" },
      { name: "Soya Chaap Tikka + Roomali Roti", note: "Highest protein content for vegetarians", tag: "recovery" },
      { name: "Lemon Rice + Curd", tag: "fat-loss" },
      { name: "Veg Korma + Kerala Parotta", tag: "treat" },
    ],
    dinner: [
      { name: "Sweet Corn Veg Soup + Spring Rolls", tag: "fat-loss" },
      { name: "Palak Khichdi", note: "Lightness of khichdi with the iron of spinach", tag: "fat-loss" },
      { name: "Veggie Thin Crust Pizza", note: "Ask for extra mushroom and spinach toppings", tag: "treat" },
      { name: "Dal Fry + Jeera Rice", tag: "fat-loss" },
      { name: "Warm Tofu or Paneer Salad", tag: "fat-loss" },
    ],
    snacks: [
      { name: "4 Walnuts + 2 Dates", note: "Omega-3s + natural iron", tag: "fat-loss" },
      { name: "Coconut Water", note: "Electrolytes, prevents headaches", tag: "fat-loss" },
    ],
  },
  {
    day: "Friday",
    theme: "Energy for the Weekend",
    breakfast: [
      { name: "Neer Dosa + Coconut/Jaggery mixture", tag: "fat-loss" },
      { name: "Onion & Tomato Uthappam", tag: "fat-loss" },
      { name: "Paneer Paratha + Curd", tag: "recovery" },
      { name: "Besan Chilla", note: "Gram flour pancakes — high protein", tag: "fat-loss" },
      { name: "Oats Upma", tag: "fat-loss" },
    ],
    lunch: [
      { name: "North Indian Executive Thali", note: "A bit of everything to ensure no nutritional gaps", tag: "recovery" },
      { name: "Methi Malai Matar + 2 Rotis", tag: "recovery" },
      { name: "Black Chana Curry + Rice", tag: "fat-loss" },
      { name: "Sambar + Rice + Potato Fry", tag: "fat-loss" },
      { name: "Mediterranean Bowl", note: "Hummus, falafel, pita — chickpeas great for zinc", tag: "fat-loss" },
    ],
    dinner: [
      { name: "Tomato Bath + Raita", note: "Spiced tomato rice", tag: "fat-loss" },
      { name: "Veg Manchow Soup + Veg Hakka Noodles", tag: "recovery" },
      { name: "Paneer Tikka (Dry) + Mint Chutney", note: "Heavy on protein, light on carbs for good sleep", tag: "fat-loss" },
      { name: "Mixed Veg Curry + 2 Phulkas", tag: "fat-loss" },
      { name: "Aloo Gobi + Dal Tadka", tag: "fat-loss" },
    ],
    snacks: [
      { name: "Fresh Lime Soda (no sugar)", note: "Vitamin C + hydration", tag: "fat-loss" },
      { name: "Roasted Makhana", note: "Low calorie snack for evenings", tag: "fat-loss" },
    ],
  },
  {
    day: "Saturday",
    theme: "Weekend Treats (Still Healthy)",
    breakfast: [
      { name: "Chole Bhature", note: "Weekend treat — zinc and protein", tag: "treat" },
      { name: "Appam + Veg Stew", note: "Coconut milk-based, very soothing for stomach", tag: "recovery" },
      { name: "Smoothie Bowl", note: "Mixed berry or green smoothie for vitamins", tag: "fat-loss" },
      { name: "Vada Pav + Green Chilli", note: "Weekend street food treat", tag: "treat" },
      { name: "Vegetable Oats Upma", note: "Light weekend option", tag: "fat-loss" },
    ],
    lunch: [
      { name: "Malai Kofta Thali", tag: "treat" },
      { name: "Veggie Sizzler", note: "Packed with grilled veggies, paneer, and rice/noodles", tag: "recovery" },
      { name: "Hyderabadi Veg Biryani + Mirchi ka Salan", tag: "recovery" },
      { name: "Paneer Lababdar + Garlic Naan", tag: "treat" },
      { name: "Special South Indian Banana Leaf Meals", tag: "recovery" },
    ],
    dinner: [
      { name: "Pasta Arrabbiata (Red Sauce)", note: "Tomatoes rich in Vitamin C", tag: "recovery" },
      { name: "Pav Bhaji", note: "Great way to sneak in mashed vegetables", tag: "treat" },
      { name: "Bhindi (Okra) Fry + 2 Rotis", tag: "fat-loss" },
      { name: "Curd Rice + Pickle", tag: "fat-loss" },
      { name: "Tomato Soup + Croutons", tag: "fat-loss" },
    ],
    snacks: [
      { name: "Fruit Chaat", note: "Seasonal fruits with chaat masala + lemon", tag: "fat-loss" },
      { name: "Paneer Bhurji on Toast", note: "Weekend protein snack", tag: "recovery" },
    ],
  },
  {
    day: "Sunday",
    theme: "Reset & Replenish",
    breakfast: [
      { name: "Masala Puri or Sev Puri", note: "Fun, light chaat breakfast", tag: "treat" },
      { name: "Bread Pakora (Stuffed with Paneer)", tag: "recovery" },
      { name: "Filter Coffee + Kesari Bath & Khara Bath", note: "Chow Chow Bath", tag: "treat" },
      { name: "Veg Cutlets + Green Chutney", tag: "fat-loss" },
      { name: "Sweet Lassi + Toast", tag: "recovery" },
    ],
    lunch: [
      { name: "Veg Maharaja/Deluxe Thali", tag: "recovery" },
      { name: "Mushroom Biryani", note: "Delicious and excellent for Vitamin D", tag: "recovery" },
      { name: "Paneer Chettinad + Parotta", tag: "treat" },
      { name: "Dal Bati Churma", note: "If available at a local Rajasthani place", tag: "treat" },
      { name: "Thai Green Curry (Veg) + Jasmine Rice", note: "Coconut milk and loads of veggies", tag: "recovery" },
    ],
    dinner: [
      { name: "Lemon Rice + Papad", tag: "fat-loss" },
      { name: "Veg Clear Soup + Veg Dim Sums/Momos", tag: "fat-loss" },
      { name: "Baingan Bharta + 2 Rotis", note: "Roasted eggplant", tag: "fat-loss" },
      { name: "Oats Khichdi", tag: "fat-loss" },
      { name: "Grilled Veggie Panini Sandwich", tag: "fat-loss" },
    ],
    snacks: [
      { name: "Handful of Mixed Nuts (Walnuts, Almonds)", note: "Omega-3s + Vitamin E for hair", tag: "fat-loss" },
      { name: "Buttermilk / Chaas", note: "Sunday reset for gut health", tag: "fat-loss" },
    ],
  },
];

export const tagConfig: Record<MealTag, { label: string; color: string; bg: string; dot: string }> = {
  "fat-loss": {
    label: "Fat Loss",
    color: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-200",
    dot: "bg-emerald-500",
  },
  recovery: {
    label: "Recovery",
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-200",
    dot: "bg-amber-500",
  },
  treat: {
    label: "Treat",
    color: "text-rose-700",
    bg: "bg-rose-50 border-rose-200",
    dot: "bg-rose-500",
  },
};
