const express = require("express");
const router = express.Router();
const Article = require("../models/Article")

//Get all route
router.get("/", async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//Get one
router.get("/:title", getArticle, (req, res) => {
    res.json(res.article);
})

//Create one
router.post("/", async (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content,
    })
    try {
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Replace one
router.put("/:title", getArticle, async (req, res) => {
    try {
        const replaceArticle = await Article.findOneAndReplace({ title: req.params.title }, req.body, { runValidators: true, new: true });
        res.status(200).json(replaceArticle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

})

//Update one
router.patch("/:title", getArticle, async (req, res) => {
    if (req.body.title != null) {
        res.article.title = req.body.title;
    }
    if (req.body.content != null) {
        res.article.content = req.body.content;
    }

    try {
        const updateArticle = await res.article.save()
        res.status(200).json(updateArticle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Delete all
router.delete("/", async (req, res) => {
    try {
        const deleteArticles = await Article.deleteMany({});
        if (deleteArticles.deletedCount === 0) {
            res.status(202).json({ message: "No article to delete" });
        } else {
            res.status(200).json({ message: "Deleted articles" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//Delete one
router.delete("/:title", getArticle, async (req, res) => {
    try {
        await res.article.remove();
        res.status(200).json({ message: "Deleted article" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//Create middleware to do something before enter the route
async function getArticle(req, res, next) {
    let article;

    try {
        article = await Article.findOne({ title: req.params.title });
        if (article == null) {
            return res.status(404).json({ message: "Article not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.article = article;
    next();
}

module.exports = router