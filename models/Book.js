const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: [
        {
            type: String,
            required: true
        }
    ],
    description: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
    // date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;

