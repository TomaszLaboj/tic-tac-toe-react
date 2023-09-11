import { SquareProps } from "./types";

export function SquareComponent(props: SquareProps): JSX.Element {
    return (
        <>
            <div className="board">{props.square.symbol}</div>
        </>
    );
}
