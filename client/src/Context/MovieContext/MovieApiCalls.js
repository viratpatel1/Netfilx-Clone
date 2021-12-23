import axios from "axios";
import { createMovieFailed, createMovieStart, createMovieSuccess, deleteMovieFailed, deleteMovieStart, deletetMovieSuccess, getMovieFailed, getMovieStart, getMovieSuccess } from "./MovieAction"

const Local = "http://localhost:4000/";


//To fetch the movies
export const getMovies = async (dispatch) =>
{
    dispatch(getMovieStart());
    try
    {
        const res = await axios.get(`${Local}auth/movies`,
            {
                headers: {
                    token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
                }
            }
        );
        dispatch(getMovieSuccess(res.data));
        // console.log("rd", res.data)
    } catch (error)
    {
        dispatch(getMovieFailed());
    }
};

//API Calls to delete the Movie 
export const deleteMovie = async (id, dispatch) =>
{
    dispatch(deleteMovieStart());
    try
    {
        await axios.delete(`${Local}auth/movies/${id}`,
            {
                headers: {
                    token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
                }
            }
        );
        dispatch(deletetMovieSuccess(id));
        // console.log("rd", res.data)
    } catch (error)
    {
        dispatch(deleteMovieFailed());
    }
};

//To create the Movie
export const createMovies = async (movie, dispatch) =>
{
    dispatch(createMovieStart());
    try
    {
        const res = await axios.post(`${Local}auth/movies`, movie,
            {
                headers: {
                    token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
                }
            }
        );
        dispatch(createMovieSuccess(res.data));
        // console.log("rd", res.data)
    } catch (error)
    {
        dispatch(createMovieFailed());
    }
};