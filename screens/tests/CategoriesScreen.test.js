import { render, fireEvent, spyOn } from "@testing-library/react-native";
import CategoriesScreen from "../CategoriesScreen";
import { useNavigation } from "@react-navigation/native";

describe("<CategoriesScreen />", () => {
   test("Initial render", () => {
      const screen = render(<CategoriesScreen />);
      expect(screen.getAllByTestId("mealItem")).toHaveLength(10);
   });

   test("Navigate to a category page", () => {
      const navigate = useNavigation();
      const screen = render(
         <CategoriesScreen
            navigation={navigate.navigate("MealsOverview", {
               route: { param: "c1" },
            })}
         />
      );
      const mealsCategoryList = screen.getAllByTestId("mealItem");
      fireEvent.press(mealsCategoryList[0]);
      expect(screen.getByText("Spaghetti with Tomato Sauce")).toBeTruthy();
   });
});
