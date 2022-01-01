import React, { useEffect, useState } from 'react';
// import { AcUnit } from "@material-ui/icons";
import "../CSS/Home.scss";
import Features from './Features';
import axios from "axios";
import List from './List';
import Navbar from './Navbar';

// const Local = "http://localhost:4000/";
const Local = "https://netflixs-clone.herokuapp.com/";



const Home = ({ type }) =>
{
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() =>
    {
        const getRandomList = async () =>
        {
            try
            {
                const res = await axios.get(`${Local}auth/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        }
                    }
                );
                setLists(res.data);
                // console.log(res);

            } catch (err)
            {
                console.log(err)
            }
        }
        getRandomList();
    }, [genre, type]);

    return (
        <div className='home'>
            <Navbar />
            <Features type={type} setGenre={setGenre} />
            {lists.map((list, i) => (
                <List key={i} list={list} />
            ))}
        </div>
    )
}

export default Home
