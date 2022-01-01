import axios from "axios";
import { LoginFailed, LoginStart, LoginSuccess } from "./AuthAction";

// const Local = "http://localhost:4000/";
const Local = "https://netflixs-clone.herokuapp.com/";


export const login = async (user, dispatch) =>
{
    dispatch(LoginStart());
    try
    {
        const res = await axios.post(`${Local}auth/login`, user);
        dispatch(LoginSuccess(res.data));
    } catch (error)
    {
        dispatch(LoginFailed());
        // console.log(error);
    }
}