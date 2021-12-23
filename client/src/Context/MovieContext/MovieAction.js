export const getMovieStart = () =>
({
    type: "GET_MOVIE_START",
});

export const getMovieSuccess = (movies) =>
({
    type: "GET_MOVIE_SUCCESS",
    payload: movies,
});

export const getMovieFailed = () =>
({
    type: "GET_MOVIE_FAILED",
});


//For Delete Movies
export const deleteMovieStart = () =>
({
    type: "DELETE_MOVIE_START",
});

export const deletetMovieSuccess = (id) =>
({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
});

export const deleteMovieFailed = () =>
({
    type: "DELETE_MOVIE_FAILED",
});

//For Create Movies
export const createMovieStart = () =>
({
    type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (movie) =>
({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
});

export const createMovieFailed = () =>
({
    type: "CREATE_MOVIE_FAILED",
});

//For Update Movies
export const updateMovieStart = () =>
({
    type: "UPDATE_MOVIE_START",
});

export const updateMovieSuccess = (movie) =>
({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie,
});

export const updateMovieFailed = () =>
({
    type: "UPDATE_MOVIE_FAILED",
});