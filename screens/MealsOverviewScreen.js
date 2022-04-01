import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
   const catId = route.params.categoryId;

   const displayedMeals = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(catId) >= 0;
   });

   useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;
      navigation.setOptions({ title: categoryTitle });
   }, [catId, navigation]);

   return <MealsList items={displayedMeals} />;
};
export default MealsOverviewScreen;
