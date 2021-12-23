import axios from "axios";
import { createListFailed, createListStart, createListSuccess, deleteListFailed, deleteListStart, deletetListSuccess, getListFailed, getListStart, getListSuccess } from "./ListAction";

const Local = "http://localhost:4000/";


//To fetch the movies
export const getLists = async (dispatch) =>
{
    dispatch(getListStart());
    try
    {
        const res = await axios.get(`${Local}auth/lists/`,
            {
                headers: {
                    token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
                }
            }
        );
        dispatch(getListSuccess(res.data));
        // console.log("rd", res.data)
    } catch (error)
    {
        dispatch(getListFailed());
    }
};

//API Calls to delete the Movie
export const deleteList = async (id, dispatch) =>
{
    dispatch(deleteListStart());
    try
    {
        await axios.delete(`${Local}auth/lists/${id}`,
            {
                headers: {
                    token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
                }
            }
        );
        dispatch(deletetListSuccess(id));
        // console.log("rd", res.data)
    } catch (error)
    {
        dispatch(deleteListFailed());
    }
};

//To create the Movie
export const createList = async (list, dispatch) =>
{
    dispatch(createListStart());
    try
    {
        const res = await axios.post(`${Local}auth/lists`, list,
            {
                headers: {
                    token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
                }
            }
        );
        dispatch(createListSuccess(res.data));
        // console.log("rd", res.data)
    } catch (error)
    {
        dispatch(createListFailed());
    }
};