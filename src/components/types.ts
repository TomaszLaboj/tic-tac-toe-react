interface Square {
    id: number;
    symbol: "x" | "o" | null;
}

interface SquareProps {
    square: Square;
}
export type { Square, SquareProps };
