let Article = require("./connect-db");


const getAll = (req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json(`Error: ${err}`))
}

const getSingleItem = (req, res) => {
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

const createItem = (req, res) => {
    const { title, keyWords, body, createdAt, updatedAt } = req.body;

    const newArticle = new Article({
        title,
        keyWords,
        body,
        createdAt,
        updatedAt,
    });

    newArticle.save()
        .then(() => res.json("article added!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

const deleteItem = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.json("article deleted!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
}

const updateItem = (req, res) => {
    const { title, keyWords, body} = req.body;

    Article.findById(req.params.id)
        .then(article => {
            article.title = title || article.title;
            article.keyWords = keyWords || article.keyWords;
            article.body = body || article.body;
            article.updatedAt = new Date().toLocaleString();

            article.save()
                .then(() => res.json("article updated!"))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
}

module.exports = { getAll, getSingleItem, createItem, deleteItem, updateItem};