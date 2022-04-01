import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
   const catId = route.params.categoryId;

   const displayedMeals = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(catId) >= 0;
   });

   const onPressHandler = (mealId) => {
      navigation.navigate("MealsDetails", { mealId: mealId });
   };

   const renderMealItem = (itemData) => {
      const item = itemData.item;
      const mealItemProps = {
         title: item.title,
         imgUrl: item.imageUrl,
         affordability: item.affordability,
         complexity: item.complexity,
         duration: item.duration,
         onPress: onPressHandler,
         id: item.id,
      };
      return <MealItem {...mealItemProps} />;
   };

   useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;
      navigation.setOptions({ title: categoryTitle });
   }, [catId, navigation]);

   return (
      <View style={styles.container}>
         <FlatList
            data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
         />
      </View>
   );
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
   },
});
