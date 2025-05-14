import { useState } from "react";
import { Square } from "./components/Square"
import { calculateWinner } from "./components/calculateWinner";

export default function Board() {
  const [xIsNext, setXIsNext ] = useState(true);
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));

  const winner = calculateWinner(squareValue);
  let status;
  if(winner){
    status = "Ganador: " + winner;
  }else{
    status = "Siguiente: " + (xIsNext ? "X" : "O");
  }

  function handleClick(index) {
    const square = squareValue.slice();
    if(square[index] == null || calculateWinner(squareValue)){
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
      <h1>{ status }</h1>
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