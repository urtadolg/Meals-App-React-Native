import {
   View,
   Text,
   Pressable,
   Image,
   StyleSheet,
   Platform,
} from "react-native";
import MealDetail from "../MealDetail";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
   title,
   imgUrl,
   duration,
   complexity,
   affordability,
   id,
}) => {
   const navigation = useNavigation();

   const onPressHandler = () => {
      navigation.navigate("MealsDetails", { mealId: id });
   };

   return (
      <View style={styles.mealItem}>
         <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            onPress={onPressHandler}
         >
            <View style={styles.innerContainer}>
               <View>
                  <Image style={styles.image} source={{ uri: imgUrl }} />
                  <Text style={styles.title}>{title}</Text>
               </View>
               <MealDetail
                  duration={duration}
                  affordability={affordability}
                  complexity={complexity}
               />
            </View>
         </Pressable>
      </View>
   );
};

export default MealItem;

const styles = StyleSheet.create({
   mealItem: {
      margin: 16,
      borderRadius: 8,
      overflow: "hidden",
      backgroundColor: "white",
      elevation: 4,
      shadowColor: "black",
      shadowOpacity: 0.35,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 16,
      overflow: Platform.select({ ios: "visible", android: "hidden" }),
   },
   innerContainer: {
      borderRadius: 8,
      overflow: "hidden",
   },
   image: {
      width: "100%",
      height: 200,
   },
   title: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 18,
      margin: 8,
   },
   buttonPressed: {
      opacity: 0.5,
   },
});
