import express from "express";
import { NetflixMovie } from "../models/Movie.js";
import verifyToken from "./verifyToken.js";

const router = express.Router();

//To Create Movies
router.post("/", verifyToken, async (req, res) =>
{
    if (req.user.isAdmin)
    {
        try
        {
            const newMovie = new NetflixMovie(req.body);
            await newMovie.save()
                .then(() => console.log("Movie Saved"))
                .catch((err) => console.log(err));

            res.status(200).json(newMovie);
        } catch (error)
        {
            res.status(500).json(error)
        }
    } else
    {
        res.status(403).json("You are not Allowed")
    }
});

//To Update the Movies
router.put("/:id", verifyToken, async (req, res) =>
{
    if (req.user.isAdmin)
    {
        try
        {
            const UpdatedMovie = new NetflixMovie.findByIdAndUpdate(req.params.id,
                { $set: req.body },
                { new: true }
            );

            res.status(200).json(UpdatedMovie);
        } catch (error)
        {
            res.status(500).json(error)
        }
    } else
    {
        res.status(403).json("You are not Allowed")
    }
});

//To Delete the Movies
router.delete("/:id", verifyToken, async (req, res) =>
{
    if (req.user.isAdmin)
    {
        try
        {
            await NetflixMovie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie Deleted...");
        } catch (error)
        {
            res.status(500).json(error)
        }
    } else
    {
        res.status(403).json("You are not Allowed")
    }
});

//To Get the Movie by id
router.get("/find/:id", verifyToken, async (req, res) =>
{
    try
    {
        const allMovies = await NetflixMovie.findById(req.params.id);

        res.status(200).json(allMovies);
    } catch (error)
    {
        res.status(500).json(error)
    }
});

//To Get the Random Movies
router.get("/random", verifyToken, async (req, res) =>
{
    //query.type is used to check if something new is given on the url path like eg:(?type=series) then req.query.type will return "random"
    const type = req.query.type;
    let movie;
    try
    {
        if (type === "series")
        {
            movie = await NetflixMovie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else
        {
            movie = await NetflixMovie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }

        res.status(200).json(movie);
    } catch (error)
    {
        return res.status(500).json(error)
    }
});

//To Get All Movie
router.get("/", verifyToken, async (req, res) =>
{
    if (req.user.isAdmin)
    {
        try
        {
            const movies = await NetflixMovie.find();
            res.status(200).json(movies.reverse());
        } catch (error)
        {
            res.status(500).json(error)
        }
    } else
    {
        res.status(403).json("You are not Allowed")
    }
});

export const UserMovies = router;