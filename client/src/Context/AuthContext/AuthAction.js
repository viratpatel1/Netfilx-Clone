//For Login
export const LoginStart = () =>
({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) =>
({
    type: "LOGIN_SUCCESS",
    payload: user
});

export const LoginFailed = () =>
({
    type: "LOGIN_FAILED",
});

//For Logout
export const Logout = () =>
({
    type: "LOGOUT",
});

