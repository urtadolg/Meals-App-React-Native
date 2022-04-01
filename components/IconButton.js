import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, color, onPress }) => {
   return (
      <Pressable
         onPress={onPress}
         style={({ pressed }) => pressed && styles.pressed}
      >
         <Ionicons name={name} color={color} size={25} />
      </Pressable>
   );
};

export default IconButton;

const styles = StyleSheet.create({
   pressed: {
      opacity: 0.75,
   },
});
