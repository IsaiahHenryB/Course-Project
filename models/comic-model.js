const mongoose = require('mongoose')

const { Schema } = mongoose;

const comicSchema =new Schema({
    title: {
        type: String,
        required: [ true, "A title is required."],
        minLength: [ 1, 'You need at least 1 character']
    },
    author: {
        type: String,
        required: [ true, "The author's name is required."],
        minLength: [ 1, 'You need at least 1 character']
    },
    publisher: {
        type: String,
        minLength: [ 1, 'You need at least 1 character']
    },
    genre: {
        type: String,
        minLength: [ 1, 'You need at least 1 character']
    },
    synopsis: {
        type: String,
        minLength: [ 1, 'You need at least 1 character']
    },
    pages: {
        type: Number,
        min: [ 1, 'A book need at least 1 page.']
    },
    rating: {
        type: Number,
        min: [ 1, 'The rating has to be at least 1'],
        max: [ 5, 'The rating has to be at least 1']
    },
    image: {
        type: String,
        minLength: [ 1, 'You need at least 1 character']
    },
})

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;