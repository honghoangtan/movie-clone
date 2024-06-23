
// const express = require("express")
import express from 'express'
import dotenv from "dotenv"
import databaseConnection from './utils/database.js'
import cookieParser from 'cookie-parser';

import userRoute from './routes/userRoute.js'

import cors from 'cors'

databaseConnection()

dotenv.config({
    path: ".env"
})

const app = express()

//middllewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser());

const corsOption = {
    origin: 'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOption))


//api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
})