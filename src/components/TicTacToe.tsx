import { useState } from "react";
import { SquareComponent } from "./SquareComponent";
import { Square } from "./types";
import { findRandomIndex } from "./findRandomIndex";

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
        const winner: string | null = checkForWin(changedBoard);
        if (winner !== null) {
            console.log("winner is ", winner);
        }
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

function checkForWin(board: Square[]): string | null {
    let winner: string | null = null;
    for (let i = 0; i < 9; i += 3) {
        if (
            board[i].symbol === board[i + 1].symbol &&
            board[i + 1].symbol === board[i + 2].symbol
        ) {
            winner = board[i].symbol;
        }
    }
    return winner;
}
