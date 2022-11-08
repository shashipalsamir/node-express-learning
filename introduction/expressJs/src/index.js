const { response } = require("express");
const express = require("express");
const exphandlebars = require('express-handlebars');
const path = require("path");
const app = express();

const port = 8000;
const staticPath = path.join(__dirname, '../public')

// Module Wrapper Function [ __dirname and __filename ]

// Built-in middleware to server static pages or website
app.use(express.static(staticPath));

// to set the view engine
app.engine('.hbs', exphandlebars.engine({ extname: '.hbs', defaultLayout: "layout"}));
app.set('view engine', '.hbs');

// template engine route
app.get("/", (req, res) => {
    res.render("index", {
        pagetitle: "Home Page",
        metatitle: "this is meta title",
        metadesc: "this is meta description"
    });
})
app.get("/about", (req, res) => {
    res.render("about", {
        pagetitle: "About Page",
        metatitle: "About Page Meta Title",
        metadesc: "About Page Meta Description"
    });
})
app.get("/services", (req, res) => {
    res.render("services");
})
app.get("/portfolio", (req, res) => {
    res.render("portfolio");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/", (req, res) => {
    res.write('Hello Express!');
    res.send();
})

app.get("/about", (req, res) => {
    res.send('About Us Page');
})

app.get("/contact", (req, res) => {    
    res.send('Contact Us Page');
})

app.get("/temp", (req, res) => {    
    res.json([{
        id: 1,
        name: "shashi"
    },
    {
        id: 1,
        name: "shashi"
    }]);
})

app.listen(port, () => {
    console.log(`Express server is started on port no ${port}`);
})