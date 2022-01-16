import React, { useContext, useState } from 'react';
import Search from '@material-ui/icons/Search';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import "../CSS/Navbar.scss";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';
import { Logout } from '../AuthContext/AuthAction';


const Navbar = () =>
{
    const [isScrolled, setIsScrolled] = useState(false);
    const history = useNavigate();
    const { dispatch } = useContext(AuthContext)

    window.onscroll = () =>
    {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    };

    // const handleLogout = (e) =>
    // {
    //     e.preventDefault();
    //     localStorage.removeItem("user");
    //     history("/login");
    // }

    // console.log(isScrolled)
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                    <Link to="/" className="link">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className='link'>
                        <span className='navbarmainlink'>Series</span>
                    </Link>
                    <Link to="/movies" className='link'>
                        <span className='navbarmainlink'>Movies</span>
                    </Link>
                    {/* <span>New and Popular</span>
                    <span>My List</span> */}
                </div>
                <div className="right">
                    {/* <Search className='icon' />
                    <span>KIDs</span>
                    <NotificationsActive className='icon' /> */}
                    <div className='profile'>
                        <img src='data:image/jpeg;base64,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' alt='Img' />
                        <ArrowDropDown className='icon' />
                        <div className='options'>
                            {/* <span>Setting</span> */}
                            <span onClick={() =>
                            {
                                dispatch(Logout())
                                history("/")
                            }}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
