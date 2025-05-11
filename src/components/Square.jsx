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

export default { Square };