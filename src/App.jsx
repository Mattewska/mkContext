import { useState } from "react";
import { Square } from "./components/Square"

export default function Board() {
  const [xIsNext, setXIsNext ] = useState(true);
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));
  function handleClick(index) {
    const square = squareValue.slice();
    if(square[index] == null){
      if(xIsNext){
      square[index] = "X";
      }else{
        square[index] = "O";
      }
    }
    setSquareValue(square);
    setXIsNext(!xIsNext);
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(squares[a]);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

