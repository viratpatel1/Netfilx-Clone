
import { createContext, useEffect, useReducer } from "react"
import ListReducer from "./ListReducer";

const Initial_State = {
    lists: [],
    isFetching: false,
    error: false,
}

export const ListContext = createContext(Initial_State);

export const ListContextProvider = ({ children }) =>
{
    const [state, dispatch] = useReducer(ListReducer, Initial_State);

    return (
        <ListContext.Provider value={{ lists: state.lists, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </ListContext.Provider>
    )
}