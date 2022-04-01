import { Text, View, Pressable, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
   return (
      <View style={styles.gridItem} testID="mealItem">
         <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [
               styles.button,
               pressed ? styles.buttonPressed : null,
            ]}
            onPress={onPress}
         >
            <View style={[styles.innerContainer, { backgroundColor: color }]}>
               <Text style={styles.title}>{title}</Text>
            </View>
         </Pressable>
      </View>
   );
};
export default CategoryGridTile;

const styles = StyleSheet.create({
   gridItem: {
      flex: 1,
      margin: 16,
      height: 150,
      borderRadius: 8,
      elevation: 4,
      shadowColor: "black",
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      backgroundColor: "white",
      overflow: Platform.select({ ios: "visible", android: "hidden" }),
   },
   button: {
      flex: 1,
   },
   innerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      borderRadius: 8,
   },
   title: {
      fontWeight: "bold",
      fontSize: 18,
   },
   buttonPressed: {
      opacity: 0.5,
   },
});
