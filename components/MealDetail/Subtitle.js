import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children, style, textStyle }) => {
   return (
      <View style={[styles.container, style]}>
         <Text style={[styles.title, textStyle]}>{children}</Text>
      </View>
   );
};

export default Subtitle;

const styles = StyleSheet.create({
   container: {
      paddingVertical: 5,
      borderBottomColor: "#ffc39b",
      borderBottomWidth: 2,
      width: "80%",
      alignSelf: "center",
   },
   title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#ffc39b",
      textAlign: "center",
   },
});
