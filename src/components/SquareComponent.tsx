import { SquareProps } from "./types";

export function SquareComponent(props: SquareProps) {
    return (
        <button
            className="square"
            onClick={() => props.handleClick(props.square)}
        >
            <div>{props.square.symbol}</div>
        </button>
    );
}
