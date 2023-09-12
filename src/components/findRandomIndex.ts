import { Square } from "./types";

export function findRandomIndex(board: Square[]): number {
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
