import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../CSS/Register.scss";

const Local = "http://localhost:4000/";

const Register = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    // const emailRef = useRef();
    // const passwordRef = useRef();
    // const usernameRef = useRef();
    const history = useNavigate();

    // const handleStart = () =>
    // {
    // }

    const handleFinish = async (e) =>
    {
        e.preventDefault();
        try
        {
            await axios.post(`${Local}auth/register`, { email, username, password });
            history("/login");
        } catch (error)
        {
            console.log(error)
        }
    }
    return (
        <div className='register'>
            <div className='top'>
                <div className='wrapper'>
                    <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='' />
                    {/* <a href='/login'>
                        <button className='loginButton' >Sign In</button>
                    </a> */}

                </div>
            </div>
            <div className='container'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>


                <form className='form'>
                    <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                    <input type='email' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Password Address' onChange={(e) => setPassword(e.target.value)} />
                    <button className='registerButton' onClick={handleFinish}>Start</button>
                    <span>Have A Account? <Link style={{ color: "white" }} to='/login'>Sign In</Link></span>
                </form>
                {/* {
                    !email ? (
                        <div className='input'>
                            <input type='email' placeholder='Email Address' ref={emailRef} />
                            <button className='registerButton' onClick={handleStart}>Get Started</button>
                        </div>

                    ) : (
                        <form className='input'>
                            <input type='text' placeholder='Username' ref={usernameRef} />
                            <input type='password' placeholder='Password Address' ref={passwordRef} />
                            <button className='registerButton' onClick={handleFinish}>Start</button>
                        </form>
                    )
                } */}
            </div>
        </div>
    )
}

export default Register
