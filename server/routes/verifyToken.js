import jwt from "jsonwebtoken";

// import React from 'react'

function verifyToken(req, res, next)
{
    const authHeader = req.headers.token;
    if (authHeader)
    {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) =>
        {
            if (err) res.status(403).json("Token is not Valid!");
            // console.log("S1 ", user)
            req.user = user;
            next();

        });
    } else
    {
        return res.status(401).json("You are not authenticated!")
    }
}

export default verifyToken
