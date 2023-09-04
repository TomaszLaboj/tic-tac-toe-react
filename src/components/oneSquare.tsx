export interface OneSquare {
    id: number;
    squareSymbol: string;
}

export interface OneSquareProps {
    square: OneSquare;
}

export function OneSquareElement(props:OneSquareProps):JSX.Element {
    return (
        <div>
            <div>{props.square.squareSymbol}</div>
        </div>
)
}