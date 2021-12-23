import { PlayArrow, Add, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/ListItems.scss";

const Local = "http://localhost:4000/";

const ListItems = ({ index, item }) =>
{
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    // const trailer = "https://www.youtube.com/embed/zWh3CShX_do";

    //To fetch All the Movie details with the help of id(item)
    useEffect(() =>
    {
        const getMovie = async () =>
        {
            try
            {
                const res = await axios.get(`${Local}auth/movies/find/${item}`,
                    {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        }
                    }
                );
                setMovie(res.data);
                // console.log(res)

            } catch (error)
            {
                console.log(error)
            }
        }
        getMovie();
    }, [item])


    return (
        <Link to={{ pathname: "/watch", movie }}>
            <div className='listItem' style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={movie.img} />
                {isHovered && (
                    <>
                        <video autoPlay={true} loop data-reactid=".0.1.0.0">
                            <source src="/video/test.mp4" data-reactid=".0.1.0.0.0" type='video/mp4' />
                        </video>
                        <div className='movieInfo'>
                            <div className='icons'>
                                <PlayArrow className='icon' />
                                <Add className='icon' />
                                <ThumbUpOutlined className='icon' />
                                <ThumbDownOutlined className='icon' />
                            </div>
                            <div className='movieInfoTop'>
                                <span>{movie.duration}</span>
                                <span className='limit'>+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className='desc'>
                                {movie.desc}
                            </div>
                            <div className='genre'>{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
}

export default ListItems