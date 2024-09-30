const express = require("express");
const router = express.Router();
const snippet = require("../../models/snippet")

router.post("/", async (req, res) => {
    const token = req.cookies.token;
    const { title, tags, folder, text } = req.body;

    if(!token) {
        return res.status(401).json({message: "Unauthorized access"});
    }

    if(!snippet) {
        return res.status(404).json({message: "Snippet is required"});
    }

    try {
        const newSnippet = new snippet({
            title: title, 
            tags: tags, 
            folder: folder, 
            text: text
        });
    }
    catch (e) {
        console.error(e);
    }
});

module.exports = router;