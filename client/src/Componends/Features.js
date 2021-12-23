import { InfoOutlined, PlayArrow, SignalCellularNullRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Features.scss";
import { useNavigate } from "react-router-dom";


const Local = "http://localhost:4000/";

const Features = ({ type, setGenre }) =>
{
    const [content, setContent] = useState({});
    // const history = useNavigate();

    // const data = JSON.parse(localStorage.getItem("user"));

    useEffect(() =>
    {
        const getRandomContent = async () =>
        {
            try
            {
                const res = await axios.get(`${Local}auth/movies/random?type=${type}`,
                    {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        }
                    }
                );
                setContent(res.data[0]);
            } catch (error)
            {
                console.log(error)
            }
        }
        getRandomContent();
    }, [type]);

    // console.log("od ", data);
    // useEffect(() =>
    // {
    //     if (data)
    //     {
    //         history("/")
    //     } else
    //     {
    //         history("/login")
    //     }
    // }, [data])



    return (
        <div className="features">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                        <option >Genre</option>
                        <option value="action">Action</option>
                        <option value="horror">Horror</option>
                        <option value="crime">Crime</option>
                        <option value="comedy">Comedy</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="romance">Romance</option>
                        <option value="adventure">Adventure</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>

                    </select>
                </div>
            )}
            <img
                src={content.img}
                alt="Home Banner Img"
            />
            <div className="info">
                <img src={content.imgTitle} alt='TitleImg' />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Features;
