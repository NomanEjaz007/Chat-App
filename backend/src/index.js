import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import {connectDB} from "./lib/db.js";

import authRoutes from './routes/auth.route.js';

dotenv.config();
const  app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser()); // ✅ Middleware to parse cookies

app.use("/api/auth", authRoutes)

// ✅ Error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("The server is running on the port: " + PORT);
        });
    } catch (error) {
        console.log("Error starting server:", error.message);
    }
};

startServer();

