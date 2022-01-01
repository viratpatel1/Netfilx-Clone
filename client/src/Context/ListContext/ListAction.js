export const getListStart = () =>
({
    type: "GET_LIST_START",
});

export const getListSuccess = (lists) =>
({
    type: "GET_LIST_SUCCESS",
    payload: lists,
});

export const getListFailed = () =>
({
    type: "GET_LIST_FAILED",
});


// //For Delete Movies
export const deleteListStart = () =>
({
    type: "DELETE_LIST_START",
});

export const deletetListSuccess = (id) =>
({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
});

export const deleteListFailed = () =>
({
    type: "DELETE_LIST_FAILED",
});

// //For Create Movies
export const createListStart = () =>
({
    type: "CREATE_LIST_START",
});

export const createListSuccess = (lists) =>
({
    type: "CREATE_LIST_SUCCESS",
    payload: lists,
});

export const createListFailed = () =>
({
    type: "CREATE_LIST_FAILED",
});

// //For Update Movies
export const updateListStart = () =>
({
    type: "UPDATE_LIST_START",
});

export const updateListSuccess = (list) =>
({
    type: "UPDATE_LIST_SUCCESS",
    payload: list,
});

export const updateListFailed = () =>
({
    type: "UPDATE_LIST_FAILED",
});