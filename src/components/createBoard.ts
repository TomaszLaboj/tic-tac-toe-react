import { Square } from "./types";

export function createBoard(): Square[] {
    const boardState: Square[] = [];
    for (let i = 1; i <= 9; i++) {
        boardState.push({
            id: i,
            symbol: null,
        });
    }
    return boardState;
}
