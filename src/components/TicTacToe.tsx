import { Square } from "./types";
import { SquareComponent } from "./SquareComponent";

export function TicTacToe(): JSX.Element {
    const boardState: Square[] = [];
    for (let i = 1; i <= 9; i++) {
        boardState.push({
            id: i,
            symbol: "x",
        });
    }
    console.log(boardState);
    return (
        <>
            {boardState.map((element) => {
                return <SquareComponent key={element.id} square={element} />;
            })}
        </>
    );
}
