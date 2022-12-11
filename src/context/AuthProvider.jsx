//este provee toda la informacion a la aplicacion
//children:componentes hijos
import {AuthContext} from "./AuthContext";
import {useReducer} from "react";
import {authReducer} from "./authReducer";
import {types} from "../types/types";

const initialState = {
    logged: false,
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, initialState);

    const login = (id, name, lastName, email, reserved_seats) => {
        const action = {
            type: types.login,
            payload: {
                ID: id,
                name: name,
                lastName: lastName,
                email: email,
                reserved_seats: reserved_seats
            }
        }
        dispatch(action);
    }

    return(
        <AuthContext.Provider value={{
            ...authState,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
    )
}