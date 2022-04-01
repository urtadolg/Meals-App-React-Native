import { View, Text, StyleSheet } from "react-native";

const List = ({ list, style, itemStyle, textStyle }) => {
   return (
      <View style={[styles.listContainer, style]}>
         {list.map((item, index) => (
            <View key={index} style={[styles.listItem, itemStyle]}>
               <Text style={[styles.itemText, textStyle]} key={index}>
                  {item}
               </Text>
            </View>
         ))}
      </View>
   );
};

export default List;

const styles = StyleSheet.create({
   listContainer: {
      width: "80%",
      alignSelf: "center",
      marginVertical: 5,
   },
   listItem: {
      borderRadius: 5,
      backgroundColor: "#ffc39b",
      marginVertical: 5,
      padding: 5,
   },
   itemText: {
      textAlign: "center",
      color: "#5f3f2a",
      fontWeight: "bold",
   },
});
