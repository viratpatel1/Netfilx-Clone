import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createList } from "../../../Context/ListContext/ListApiCalls";
import { ListContext } from "../../../Context/ListContext/ListContext";
import {
  createMovies,
  getMovies,
} from "../../../Context/MovieContext/MovieApiCalls";
import { MovieContext } from "../../../Context/MovieContext/MovieContext";

import storage from "../../../firebase";
import "./newList.css";

export default function NewList() {
  const [list, setList] = useState(null);
  const history = useNavigate();
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history("/lists");
  };

  const handleSelect = (e) => {
    e.preventDefault();
    // console.log("SO ", e.target.selectedOptions);
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  // console.log("l ", list);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option value="">Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>

        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select multiple name="content" onChange={handleSelect}>
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
