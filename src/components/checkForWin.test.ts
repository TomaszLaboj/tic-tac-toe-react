import { checkForWin } from "./checkForWin";

test("checks for win for x", () => {
    expect(
        checkForWin([
            { id: 1, symbol: "x" },
            { id: 2, symbol: "x" },
            { id: 3, symbol: "x" },
            { id: 4, symbol: "o" },
            { id: 5, symbol: "o" },
            { id: 6, symbol: null },
            { id: 7, symbol: null },
            { id: 8, symbol: null },
            { id: 9, symbol: null },
        ])
    ).toEqual("x");
});
