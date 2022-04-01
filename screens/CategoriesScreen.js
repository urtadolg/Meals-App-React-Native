import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
   const renderCategoryItem = (itemData) => {
      const onSelectHandler = () => {
         navigation.navigate("MealsOverview", {
            categoryId: itemData.item.id,
         });
      };

      return (
         <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={onSelectHandler}
         />
      );
   };

   return (
      <FlatList
         data={CATEGORIES}
         keyExtractor={(item) => item.id}
         renderItem={renderCategoryItem}
         numColumns={2}
      />
   );
};
export default CategoriesScreen;

const styles = StyleSheet.create({});
