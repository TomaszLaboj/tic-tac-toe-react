import { SquareProps } from "./types";

export function SquareComponent(props: SquareProps) {
    return (
        <div className="square" onClick={() => props.handleClick(props.square)}>
            <div>{props.square.symbol}</div>
        </div>
    );
}
