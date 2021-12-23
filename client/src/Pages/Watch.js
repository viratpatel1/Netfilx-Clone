import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../CSS/Watch.scss";

const Watch = () =>
{
    const location = useLocation();

    console.log("l ", location);
    return (
        <div className='watch'>
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            {/* <video className='video' autoPlay progress controls src='https://youtu.be/tRcrQaIOe7o' /> */}
            <video className='video' autoPlay progress controls src='/video/test.mp4' />
        </div>
    )
}

export default Watch
