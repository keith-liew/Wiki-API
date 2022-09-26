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
const localURL= "mongodb://localhost:27017/wikidb";
mongoose.connect( process.env.URL || localURL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => {console.log("Connected to database")});

//insert default data if database is empty
Article.countDocuments().then(function(result){
    if(result === 0){
        Article.insertMany(defaultData).then( console.log("Initialize database")).catch(function(e){console.log(e.message)});
    }
}).catch(function(e){console.log(e.message)});

//create router
const articlesRouter = require("./routes/articles")
app.use("/v2/articles", articlesRouter);

app.listen( process.env.PORT || 3000, function () {
    console.log("API stared on " + (process.env.PORT? "cloud" : "port "+ 3000));
});

