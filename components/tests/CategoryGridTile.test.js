import { render } from "@testing-library/react-native";
import CategoryGridTile from "../CategoryGridTile";

describe("<CategoryGridTile />", () => {
   test("Initial rendering", () => {
      const screen = render(<CategoryGridTile title={"dummy meal name"} />);
      expect(screen.getByText("dummy meal name")).toBeTruthy();
   });
});
