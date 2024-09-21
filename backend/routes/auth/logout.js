const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    res.clearCookie("token");
    res.clearCookie("refreshToken");
    res.json({ message: "Logged out successfully" });
});

module.exports = router;