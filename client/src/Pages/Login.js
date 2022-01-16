import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../AuthContext/ApiCalls';
import { AuthContext } from '../AuthContext/AuthContext';
import "../CSS/Login.scss";

// const Local = "http://localhost:4000/";
const Local = "https://netflixs-clone.herokuapp.com/";

const Login = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext)
    // const history = useNavigate();

    const handleAdmin = () =>
    {
        setEmail("admin@gmail.com")
        setPassword("admin")
    }

    const handleDemoLogin = () =>
    {
        setEmail("vp@gmail.com")
        setPassword("vp")
    }

    const handleLogin = (e) =>
    {
        e.preventDefault();
        login({ email, password }, dispatch);
        // await axios.post(`${Local}auth/login`, { email, password })
        //     .then((res) =>
        //     {
        //         JSON.parse(localStorage.getItem("user", res.data));
        //         console.log("LoginSuccess ", res);
        //         history("/");
        //     }
        //     )
        //     .catch((err) => console.log(err));
    }



    return (
        <div className='login'>
            <div className='top'>
                <div className='wrapper'>
                    <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='' />
                </div>
            </div>
            <div className='container'>
                <form onSubmit={handleLogin}>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email " onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <div style={{ width: "100%" }}>
                        <button style={{ width: "50%", fontWeight: "600" }} className='loginButton' onClick={handleDemoLogin}>Demo Sign in</button>
                        <button style={{ width: "50%", backgroundColor: "rgb(62, 224, 12)", color: "black", fontWeight: "600" }} className='loginButton' onClick={handleAdmin}>Admin</button>
                    </div>
                    <span>New to Netflix? <b><Link style={{ color: "white" }} to="/register">Sign up now.</Link></b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you 're not a bot. <b>Learn more</b>.</small>
                </form>
            </div>
        </div>
    )
}

export default Login
