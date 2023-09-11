interface Square {
    id: number;
    symbol: "x" | "o" | null;
}

interface SquareProps {
    square: Square;
    handleClick: (square: Square) => void;
}
export type { Square, SquareProps };
