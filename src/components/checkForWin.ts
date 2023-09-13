import { Square } from "./types";

export function checkForWin(board: Square[]): string | null {
    let winner: string | null = null;
    const indexes: number[] = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5, 8, 0, 4, 8, 2, 4, 6,
    ];
    for (let i = 0; i < indexes.length; i += 3) {
        if (
            board[indexes[i]].symbol === board[indexes[i + 1]].symbol &&
            board[indexes[i + 1]].symbol === board[indexes[i + 2]].symbol
        ) {
            winner = board[indexes[i]].symbol;
            return winner;
        }
    }
    return null;
}
