import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "../screens/CategoriesScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

const DrawerNavigator = () => {
   const Drawer = createDrawerNavigator();

   return (
      <Drawer.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: "#330e00",
            },
            headerTintColor: "white",
            sceneContainerStyle: {
               backgroundColor: "#63453a",
            },
            drawerContentStyle: {
               backgroundColor: "#330e00",
            },
            drawerInactiveTintColor: "white",
            drawerActiveTintColor: "#330e00",
            drawerActiveBackgroundColor: "#ecb29d",
         }}
      >
         <Drawer.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
               title: "All Categories",
               drawerIcon: ({ color, size }) => (
                  <Ionicons color={color} size={size} name="home" />
               ),
            }}
         />
         <Drawer.Screen
            name="Favorite"
            component={FavoriteScreen}
            options={{
               drawerIcon: ({ color, size }) => (
                  <Ionicons color={color} size={size} name="star" />
               ),
            }}
         />
      </Drawer.Navigator>
   );
};

export default DrawerNavigator;
