import { useContext } from "react";
import { MyContext } from "./../App"

function userList() {

  const Context = useContext(MyContext);
  return (
    <>
      <h2>{Context}</h2>
      <form>
        <input type="text" name="context" id="contextValue" />
        <button></button>
      </form>
    </>
  )
}
export default userList