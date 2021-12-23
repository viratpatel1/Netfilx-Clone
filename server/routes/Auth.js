// import mongoose from "mongoose";
// import CryptoJS from "crypto-js";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NetflixUser } from "../models/User.js";

const router = express.Router();


//For Registeration
router.post("/register", async (req, res) =>
{
    console.log("Register ", req.body);
    const Hash = await bcrypt.hash(req.body.password, 12);
    try
    {
        const newUser = new NetflixUser({
            username: req.body.username,
            email: req.body.email,
            password: Hash,
        });

        await newUser.save()
            .then(() => console.log("DB Saved"))
            .catch(() => console.log("DB not Saved"));
        res.json(newUser)
    } catch (error)
    {
        console.log(error)
    }
});

//For Login
router.post("/login", async (req, res) =>
{
    console.log(req.body)
    try
    {
        const user = await NetflixUser.findOne({ email: req.body.email });
        !user && res.status(401).json("No User");

        // const byte = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        // const OriginalPassword = byte.toString(CryptoJS.enc.Utf8);
        const Check = await bcrypt.compare(req.body.password, user.password)
        // console.log("OP ", Check);

        !Check && res.status(401).json("Invalid Credentials");

        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, { expiresIn: "1d" });

        //This is Used to send the Response to the client-side without the Password
        const { password, ...info } = user._doc;

        res.status(200).json({ ...info, accessToken });
    } catch (error)
    {
        res.status(500).json(error);
    }
});



export const UserAuth = router;