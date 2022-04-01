import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import DrawerNavigator from "./components/DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <>
         <StatusBar style="light" />
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerStyle: {
                     backgroundColor: "#330e00",
                  },
                  headerTintColor: "white",
                  contentStyle: {
                     backgroundColor: "#63453a",
                  },
               }}
            >
               <Stack.Screen
                  name="Drawer"
                  component={DrawerNavigator}
                  options={{
                     headerShown: false,
                  }}
               />
               <Stack.Screen
                  name="MealsOverview"
                  component={MealsOverviewScreen}
               />
               <Stack.Screen
                  name="MealsDetails"
                  component={MealsDetailsScreen}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );
}

const styles = StyleSheet.create({});
