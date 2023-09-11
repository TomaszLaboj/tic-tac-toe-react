import { useState } from "react";
import { SquareComponent } from "./SquareComponent";
import { Square } from "./types";

export function TicTacToe(): JSX.Element {
    const boardState: Square[] = [];
    for (let i = 1; i <= 9; i++) {
        boardState.push({
            id: i,
            symbol: null,
        });
    }
    const [board, setBoard] = useState<Square[]>(boardState);

    const handleClickFunction = (clickedSquare: Square) => {
        const changedBoard: Square[] = board.map((el: Square) => {
            if (el.id === clickedSquare.id) {
                return {
                    id: clickedSquare.id,
                    symbol: "x",
                };
            } else {
                return el;
            }
        });
        setBoard([...changedBoard]);
    };
    console.log(board);
    return (
        <>
            <div className="board">
                {board.map((element) => {
                    return (
                        <SquareComponent
                            key={element.id}
                            square={element}
                            handleClick={handleClickFunction}
                        />
                    );
                })}
            </div>
        </>
    );
}
