import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react"
// import { useNavigate } from "react-router-dom";

const Initial_State = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
}

export const AuthContext = createContext(Initial_State);

export const AuthContextsProvider = ({ children }) =>
{
    // const history = useNavigate();
    const [state, dispatch] = useReducer(AuthReducer, Initial_State);
    useEffect(() =>
    {
        localStorage.setItem("user", JSON.stringify(state.user));
        // history("/")

    }, [state.user])
    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}