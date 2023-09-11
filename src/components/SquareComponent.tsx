import { SquareProps } from "./types";

export function SquareComponent(props: SquareProps): JSX.Element {
    return (
        <>
            <div className="square">{props.square.symbol}</div>
        </>
    );
}
