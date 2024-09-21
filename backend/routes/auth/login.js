const express = require("express");
const router = express.Router();
const user = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
        if (bcrypt.hashSync(password, existingUser.password)) {
            const token = jwt.sign(existingUser.id, process.env.JWT_SECRET);
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Decoded Payload:', decoded);
            return res.status(201).json({ message: "Login successful", token: token });
        }
        return res.status(401).json({ message: "Invalid credentials" }).cookie({token: token});
    }
    return res.status(404).json({ message: "User not found" });
});

module.exports = router;