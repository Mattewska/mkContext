import { useReducer } from "react";
import { userReducer } from "./userReducer"

function UserState() {
    const inicialState = {
        user: [],
        selectedUser: null 
    }
    
    const [state, dispatch ] = useReducer(userReducer, inicialState);

    

    const getUser = () => {}
    const getProfile = () => {}
}
export default userState