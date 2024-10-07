const mongoose = require('mongoose');

const Snippet = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tags: {
        type: Object,
    },
    folder: {
        type: String,
    },
    text: {
        type: Object,
    }
});

module.exports = mongoose.model('snippet', Snippet);