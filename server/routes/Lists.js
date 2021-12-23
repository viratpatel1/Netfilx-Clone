import express from "express";
import { NetflixList } from "../models/List.js";
import verifyToken from "./verifyToken.js";

const router = express.Router();

//To Create Movies
router.post("/", verifyToken, async (req, res) =>
{
    if (req.user.isAdmin)
    {
        try
        {
            const newList = new NetflixList(req.body);
            await newList.save()
                .then(() => console.log("Movie Saved"))
                .catch((err) => console.log("error ", err));

            res.status(200).json(newList);
        } catch (error)
        {
            res.status(500).json(error)
        }
    } else
    {
        res.status(403).json("You are not Allowed")
    }
});

//To Delete
router.delete("/:id", verifyToken, async (req, res) =>
{
    if (req.user.isAdmin)
    {
        try
        {
            await NetflixList.findByIdAndDelete(req.params.id);

            res.status(200).json("The List is Deleted");
        } catch (error)
        {
            res.status(500).json(error)
        }
    } else
    {
        res.status(403).json("You are not Allowed")
    }
});

//To Get
router.get("/", verifyToken, async (req, res) =>
{
    //type, genre or anything else are basically used for classify the product according to need or search in the url path.
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try
    {
        if (typeQuery)
        {
            if (genreQuery)
            {
                list = await NetflixList.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else
            {
                list = await NetflixList.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }
        } else
        {
            list = await NetflixList.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(200).json(list);
    } catch (err)
    {
        return res.status(500).json(err);
    }
});

export const UserLists = router;