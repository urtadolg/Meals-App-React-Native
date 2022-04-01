import { useLayoutEffect } from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealsDetailsScreen = ({ route, navigation }) => {
   useLayoutEffect(() => {
      navigation.setOptions({
         title: mealData.title,
         headerRight: () => (
            <IconButton
               color="white"
               name="star"
               onPress={onMenuBtnPressHandler}
            />
         ),
      });
   }, [navigation]);

   const onMenuBtnPressHandler = () => {
      console.log("pressed...");
   };

   const mealId = route.params.mealId;
   const mealData = MEALS.find((meal) => meal.id === mealId);

   return (
      <ScrollView>
         <Image style={styles.image} source={{ uri: mealData.imageUrl }} />
         <Text style={styles.title}>{mealData.title}</Text>
         <MealDetail
            duration={mealData.duration}
            complexity={mealData.complexity}
            affordability={mealData.affordability}
            textStyle={styles.detailsText}
         />
         <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List list={mealData.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List list={mealData.steps} />
         </View>
      </ScrollView>
   );
};
export default MealsDetailsScreen;

const styles = StyleSheet.create({
   image: {
      width: "100%",
      height: 300,
   },
   title: {
      fontWeight: "bold",
      fontSize: 24,
      textAlign: "center",
      color: "white",
      paddingVertical: 10,
   },
   detailsText: {
      color: "white",
      fontSize: 13,
   },
   listContainer: {
      marginBottom: 20,
   },
});
