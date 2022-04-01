import { render } from "@testing-library/react-native";
import MealsItem from "../MealItem";

describe("<MealsItem />", () => {
   test("Initial Render", () => {
      const screen = render(<MealsItem title="MealTitle" />);
      expect(screen.getByText("MealTitle")).toBeTruthy();
   });
});
