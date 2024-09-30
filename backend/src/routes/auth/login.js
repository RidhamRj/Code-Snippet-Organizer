const express = require("express");
const router = express.Router();
const user = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
        const match = await bcrypt.compare(password, existingUser.password)
        if (!match) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(existingUser.id, process.env.JWT_SECRET);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });
        return res.status(201).json({ message: "Login successful" });
    }
    return res.status(404).json({ message: "User not found" });
});

module.exports = router;