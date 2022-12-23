const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const article = new Schema({
    title: { type: String, required: true, unique:false},
    body: { type: String, required: true, unique: false },
    keyWords: { type: String, required: true, unique:false},
    createdAt: {type: Date, default: () => new Date().toLocaleString()},
    updatedAt: {type: Date, default: () => new Date().toLocaleString()},
}, {
    timestamps: true,
});

const Article = mongoose.model('Article', article);

module.exports = Article;