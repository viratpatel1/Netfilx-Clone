import React, { useContext, useState } from 'react';
import Search from '@material-ui/icons/Search';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import "../CSS/AdminNav.scss";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';
import { Logout } from '../AuthContext/AuthAction';


const Navbarr = () =>
{
    const [isScrolled, setIsScrolled] = useState(false);
    const history = useNavigate();
    const { dispatch } = useContext(AuthContext)

    window.onscroll = () =>
    {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    };


    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                </div>
                <div className="right">
                    <Search className='icon' />
                    {/* <span>KIDs</span> */}
                    <NotificationsActive className='icon' />
                    <img src='https://loremflickr.com/cache/resized/65535_51399653356_88b3eb63cb_z_640_360_nofilter.jpg' alt='Img' />
                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        <div className='options'>
                            <span>Setting</span>
                            <span onClick={() =>
                            {
                                dispatch(Logout())

                            }}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbarr
