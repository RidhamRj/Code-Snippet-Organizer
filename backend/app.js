require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/user");

const login = require("./routes/auth/login");
const register = require("./routes/auth/register");

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Connected to database"))
    .catch((e) => { console.log("Database connection failed") });

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Server running" });
});

app.use("/login", login);
app.use("/register", register);

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started");
});