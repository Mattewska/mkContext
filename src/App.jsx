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
  function handleClick(index) {
    const square = squareValue.slice();
    square[index] = "x";
    setSquareValue(square);
    console.log(squareValue);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squareValue[0]} squareFunction={() => handleClick(0)} />
        <Square value={squareValue[1]} squareFunction={() => handleClick(1)} />
        <Square value={squareValue[2]} squareFunction={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squareValue[3]} squareFunction={() => handleClick(3)} />
        <Square value={squareValue[4]} squareFunction={() => handleClick(4)} />
        <Square value={squareValue[5]} squareFunction={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squareValue[6]} squareFunction={() => handleClick(6)} />
        <Square value={squareValue[7]} squareFunction={() => handleClick(7)} />
        <Square value={squareValue[8]} squareFunction={() => handleClick(8)} />
      </div>
    </>
  );
}

