require("dotenv").config()

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
//import models and default data
const Article = require("./models/Article");
const defaultData = require("./defaultData.json");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//database settings and connection
const localURL = "mongodb://localhost:27017/wikidb";
mongoose.connect(process.env.URL || localURL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => { console.log("Connected to database") });

//insert default data if database is empty
Article.countDocuments().then(function (result) {
    if (result === 0) {
        Article.insertMany(defaultData).then(console.log("Initialize database")).catch(function (e) { console.log(e.message) });
    }
}).catch(function (e) { console.log(e.message) });

//create router v1
app.route("/v1/articles")
    .get(function (req, res) {
        Article.find({})
            .then(function (results) { res.send(results) })
            .catch(function (e) { res.send(e.message) });
    })
    .post(function (req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content,
        })
        newArticle.save().then(res.send("Article saved")).catch(function (e) { res.send(e.message) });
    })
    .delete(function (req, res) {
        Article.deleteMany({}).then(res.send("Articles deleted")).catch(function (e) { res.send(e.message) });
    });

app.route("/v1/articles/:query")
    .get(function (req, res) {
        Article.findOne({ title: req.params.query })
            .then(function (results) {
                if (results) {
                    res.send(results)
                } else {
                    res.send("Title not found");
                }
            }).catch(function (e) { res.send(e.message) });
    })
    .put(function (req, res) {
        Article.replaceOne({ title: req.params.query }, { title: req.body.title, content: req.body.content }, null, function (e) {
            if (!e) {
                res.send("Article updated")
            } else {
                res.send(e.message)
            }
        })
    })
    .patch(function (req, res) {
        Article.updateOne({ title: req.params.query }, req.body, function (e) {
            if (!e) {
                res.send("Article updated")
            } else {
                res.send(e.message)
            }
        });
    })
    .delete(function (req, res) {
        Article.deleteOne({ title: req.params.query }).then(res.send("Article deleted")).catch(function (e) { res.send(e.message) });
    });

//create router v2
const articlesRouter = require("./routes/articles")
app.use("/v2/articles", articlesRouter);

app.listen(process.env.PORT || 3000, function () {
    console.log("API stared on " + (process.env.PORT ? "cloud" : "port " + 3000));
});

