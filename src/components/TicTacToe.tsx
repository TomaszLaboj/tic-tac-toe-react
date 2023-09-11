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
        //check for win
        if (
            changedBoard.filter((element) => element.symbol === null).length ===
            0
        ) {
            setBoard(changedBoard);
            //check for win
        }

        const randomIndexWithoutX = findRandomIndex(changedBoard);
        changedBoard[randomIndexWithoutX].symbol = "o";
        setBoard(changedBoard);
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

function findRandomIndex(board: Square[]): number {
    const indexesWithoutX: number[] = [];
    board.forEach((element, index) => {
        if (element.symbol === null) {
            indexesWithoutX.push(index);
        }
    });
    const randomIndexValue: number = Math.floor(
        Math.random() * indexesWithoutX.length
    );
    return indexesWithoutX[randomIndexValue];
}
