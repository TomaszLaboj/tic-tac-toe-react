import { render, screen } from "../testUtils/testUtils";
import { TicTacToe } from "./TicTacToe";

//An example of using react-testing-library
describe("MyComponent", async () => {
    test("Should have text Hello from My Component on it", () => {
        render(<TicTacToe />);
        const elem = screen.getByText("Tic Tac Toe Game");
        expect(elem).toBeInTheDocument();
    });
});
