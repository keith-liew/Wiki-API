const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

const Article = require("./Article");
const defaultData = require("./defaultData.json");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikidb").then(console.log("Database connected")).catch(function (e) { console.log(e.message) });
//insert default data if database is empty
Article.countDocuments().then(function(result){
    if(result === 0){
        Article.insertMany(defaultData).then( console.log("Initialize database")).catch(function(e){console.log(e.message)});
    }
}).catch(function(e){console.log(e.message)});

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
        Article.replaceOne({ title: req.params.query }, { title: req.body.title, content: req.body.content }, null, function(e){
            if(!e){
                res.send("Article updated")
            } else {
                res.send(e.message)
            }
        })
    })
    .patch(function (req,res){
        Article.updateOne({title: req.params.query},req.body, function(e){
            if(!e){
                res.send("Article updated")
            } else {
                res.send(e.message)
            } 
        });
    })
    .delete(function (req,res){
        Article.deleteOne({title: req.params.query}).then(res.send("Article deleted")).catch(function (e) { res.send(e.message) });
    });

app.listen(3000, function () {
    console.log("Server stared on port 3000");
});

