import express from "express";
import bcrypt from "bcrypt";
import { NetflixUser } from "../models/User.js";
import verifyToken from "./verifyToken.js";

const router = express.Router();

//For Update
router.put("/:id", verifyToken, async (req, res) =>
{
    if (req.user.id === req.params.id || req.user.isAdmin)
    {
        try
        {
            console.log(req.params.id)
            const updatedUser = await NetflixUser.findByIdAndUpdate(req.params.id,
                { $set: req.body, },
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (error)
        {
            res.status(500).json(error)
        }
    } else
    {
        res.status(403).json("You can update only your account")
    }
});

//For Delete
router.delete("/:id", verifyToken, async (req, res) =>
{
    if (req.user.id === req.params.id || req.user.isAdmin)
    {
        try
        {
            await NetflixUser.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been Deleted...");
        } catch (error)
        {
            // console.log(error)
            res.status(500).json(error)
        }
    } else
    {
        res.status(403).json("You can Delete only your account")
    }

});

// For Get
router.get("/find/:id", async (req, res) =>
{
    try
    {
        const user = await NetflixUser.findById(req.params.id)
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (error)
    {
        res.status(500).json(error)
    }

});

// Get All
router.get("/", verifyToken, async (req, res) =>
{
    if (req.user.isAdmin)
    {
        //query.new is used to check if something new is given on the url path like eg:(?new=true) then req.query.new will return "true" else undefined 
        const query = req.query.new;
        // console.log("Q ", query);
        try
        {
            const user = query ? await NetflixUser.find().limit(5) : await NetflixUser.find();
            res.status(200).json(user);
        } catch (error)
        {
            res.status(500).json(error)
        }
    } else
    {
        res.status(403).json("You are not allowed to see all users")
    }

});

//Get User Stats
router.get("/stats", async (req, res) =>
{
    const today = new Date();
    const LatYear = today.setFullYear(today.setFullYear() - 1);


    try
    {
        const data = await NetflixUser.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);

        return res.status(200).json(data);
    } catch (err)
    {
        res.status(500).json(err)
    }
});

export const UserUpdates = router;