import { useState, useEffect } from "react";
import { SquareComponent } from "./SquareComponent";
import { Square } from "./types";
import { findRandomIndex } from "./findRandomIndex";
import { checkForWin } from "./checkForWin";
import { createBoard } from "./createBoard";

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
            setIllegalMoveIndicator("Click on an empty square!");
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
            <div className="title">TIC TAC TOE</div>

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
            </div>
            {board.filter((element) => element.symbol !== null).length ===
                0 && <div className="info">Click on any square to begin</div>}
            <div className="illegal-move">{illegalMoveIndicator}</div>
        </>
    );
}
