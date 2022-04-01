import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavoriteScreen = () => {
   const favoritesCtx = useContext(FavoritesContext);

   const favoriteList = MEALS.filter((meal) =>
      favoritesCtx.ids.includes(meal.id)
   );

   if (favoriteList.length === 0) {
      return (
         <View style={styles.container}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
         </View>
      );
   }

   return <MealsList items={favoriteList} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   text: {
      fontWeight: "bold",
      color: "white",
      fontSize: 18,
   },
});
