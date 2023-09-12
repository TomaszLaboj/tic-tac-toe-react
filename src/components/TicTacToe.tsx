import { useState, useEffect } from "react";
import { SquareComponent } from "./SquareComponent";
import { Square } from "./types";
import { findRandomIndex } from "./findRandomIndex";

export function TicTacToe(): JSX.Element {
    const boardState: Square[] = createBoard();
    const [board, setBoard] = useState<Square[]>(boardState);
    const [illegalMoveIndicator, setIllegalMoveIndicator] =
        useState<string>("");

    useEffect(() => {
        const winner: string | null = checkForWin(board);
        if (winner !== null) {
            alert("Player " + winner + " wins");
            setBoard(boardState);
            setIllegalMoveIndicator("");
        }
        if (
            winner === null &&
            board.filter((element) => element.symbol === null).length === 0
        ) {
            alert("No winner!");
            setBoard(boardState);
            setIllegalMoveIndicator("");
        }
    }, [board, boardState]);

    const handleClickFunction = (clickedSquare: Square) => {
        if (clickedSquare.symbol !== null) {
            setIllegalMoveIndicator("Illegal move!");
        } else {
            setIllegalMoveIndicator("");
            const changedBoard: Square[] = board.map((element: Square) => {
                if (element.id === clickedSquare.id) {
                    return {
                        id: clickedSquare.id,
                        symbol: "x",
                    };
                } else {
                    return element;
                }
            });

            if (
                changedBoard.filter((element) => element.symbol === null)
                    .length === 0
            ) {
                setBoard(changedBoard);
            }

            const randomIndexWithoutX = findRandomIndex(changedBoard);
            changedBoard[randomIndexWithoutX].symbol = "o";
            setBoard(changedBoard);
        }
    };

    return (
        <>
            <div className="board">
                {board.map((element) => {
                    return (
                        <>
                            <SquareComponent
                                key={element.id}
                                square={element}
                                handleClick={handleClickFunction}
                            />
                        </>
                    );
                })}
                <div>{illegalMoveIndicator}</div>
            </div>
        </>
    );
}

function checkForWin(board: Square[]): string | null {
    let winner: string | null = null;
    const indexes: number[] = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5, 8, 0, 4, 8, 2, 4, 6,
    ];
    for (let i = 0; i < indexes.length; i += 3) {
        console.log(
            "checking indexes",
            indexes[i],
            indexes[i + 1],
            indexes[i + 2]
        );
        console.log(
            "showing board pieces",
            board[indexes[i]],
            board[indexes[i + 1]],
            board[indexes[i + 2]]
        );
        if (
            board[indexes[i]].symbol === board[indexes[i + 1]].symbol &&
            board[indexes[i + 1]].symbol === board[indexes[i + 2]].symbol
        ) {
            winner = board[indexes[i]].symbol;
        }
    }
    return winner;
}

function createBoard(): Square[] {
    const boardState: Square[] = [];
    for (let i = 1; i <= 9; i++) {
        boardState.push({
            id: i,
            symbol: null,
        });
    }
    return boardState;
}
