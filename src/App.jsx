import { useState } from "react";

export function Square({ value, squareFunction }) {
  //const [squareValue, setSquareValue] = useState("");

  return (
    <>
      <button className="square" onClick={squareFunction}>
        {value}
      </button>
    </>
  );
}

export default function Board() {
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));
  function handleClick() {
    const square = squareValue.slice();
    square[0] = "x";
    setSquareValue(square);
    console.log(squareValue);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squareValue[0]} squareFunction={handleClick} />
        <Square value={squareValue[1]} squareFunction={handleClick} />
        <Square value={squareValue[2]} squareFunction={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squareValue[3]} squareFunction={handleClick} />
        <Square value={squareValue[4]} squareFunction={handleClick} />
        <Square value={squareValue[5]} squareFunction={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squareValue[6]} squareFunction={handleClick} />
        <Square value={squareValue[7]} squareFunction={handleClick} />
        <Square value={squareValue[8]} squareFunction={handleClick} />
      </div>
    </>
  );
}

