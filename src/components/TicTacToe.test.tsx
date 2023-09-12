import { render, screen } from "../testUtils/testUtils";
import { TicTacToe } from "./TicTacToe";

//An example of using react-testing-library
describe("Tic Tac Toe", async () => {
    test("Should have text TIC TAC TOE", () => {
        render(<TicTacToe />);
        const elem = screen.getByText("TIC TAC TOE");
        expect(elem).toBeInTheDocument();
    });
});
