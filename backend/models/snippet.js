const mongoose = require('mongoose');
const objectId = mongoose.objectId;

const Snippet = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tags: {
        type: Object,
    },
    folder: {
        type: objectId,
    },
    text: {
        type: Object,
    }
});

module.exports = mongoose.model('snippet', Snippet);