import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserAuth } from "./routes/Auth.js";
import { UserUpdates } from "./routes/Users.js";
import { UserMovies } from "./routes/Movies.js";
import { UserLists } from "./routes/Lists.js";
dotenv.config();


const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected"))
    .catch(() => console.log("Failed to Connected"));

app.use("/auth", UserAuth);
app.use("/auth/user", UserUpdates);
app.use("/auth/movies", UserMovies);
app.use("/auth/lists", UserLists);

app.listen(PORT, () => console.log(`Server is at Port ${PORT}`));