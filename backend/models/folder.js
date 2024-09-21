const mongoose = require('mongoose');

const Folder = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    snippets: {
        type: Object,
    }
});

module.exports = mongoose.model('folder', Folder);