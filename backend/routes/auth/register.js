const express = require("express");
const router = express.Router();
const user = require("../../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword =  await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const registerUser = new user({
        name: name,
        email: email,
        password: hashedPassword
    });
    await registerUser.save();
    return res.status(201).json({ message: "Registeration successful" });
});

module.exports = router;