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
                        <img src='https://loremflickr.com/cache/resized/65535_51399653356_88b3eb63cb_z_640_360_nofilter.jpg' alt='Img' />
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
