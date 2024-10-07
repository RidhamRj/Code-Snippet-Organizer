require("dotenv").config();
const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");

const login = require("./routes/auth/login");
const register = require("./routes/auth/register");
const auth = require("./middleware/auth");
const snippet = require("./routes/snippets");

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("Connected to database"))
    .catch((e) => { console.log("Database connection failed") });

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Server running" });
});

app.use("/login", login);
app.use("/register", register);

app.use("/snippet", auth, snippet);

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server online");
});