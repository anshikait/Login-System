//To start - npm run server or nodemon server.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 8080;
connectDB();
const allowedOrigin = ['http://localhost:5173']

app.use(express.json()); 
app.use(cookieParser());
app.use(cors({origin: allowedOrigin, credentials: true}));   //so that we can send the cookie in response

//API End Points
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.get("/", (req,res) => {
    res.send("You are in the root directory");
})
app.listen(port, () => {
    console.log(`Server started on the port ${port}`);
})

