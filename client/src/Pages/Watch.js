import { ArrowBackOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import "../CSS/Watch.scss";

// const Local = "http://localhost:4000/";
const Local = "https://netflixs-clone.herokuapp.com/";

const Watch = () =>
{
    const [watch, setWatch] = useState({});
    const location = useLocation();
    const { id } = useParams();
    // console.log("id ", id)

    useEffect(() =>
    {
        const getMovie = async () =>
        {
            try
            {
                const res = await axios.get(`${Local}auth/movies/find/${id}`,
                    {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        }
                    }
                );
                setWatch(res?.data)
                // console.log(res)

            } catch (error)
            {
                console.log(error)
            }
        }
        getMovie();
    }, [id])

    // console.log("w ", watch)
    // console.log("wm", watch?.trailer)

    return (
        <div className='watch'>
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
            </Link>
            {/* <video className='video' autoPlay progress controls src='https://youtu.be/tRcrQaIOe7o' /> */}
            <video className='video' autoPlay progress controls src={watch?.trailer} />
        </div>
    )
}

export default Watch
