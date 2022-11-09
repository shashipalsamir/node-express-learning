const { response } = require("express");
const express = require("express");
const exphandlebars = require('express-handlebars');
const request = require('request');
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
    /**/

    /*const options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos',
        
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        const jsondata = JSON.parse(body);
        res.render("index", {
            userid: jsondata[0].title
        });
    });*/

    const options = {
        method: 'GET',
        url: 'https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes',
        qs: {actor: 'Al Pacino'},
        headers: {
            Authorization: 'Token token=yd8WzkWNEEzGtqMSgiZBrwtt',
            'X-RapidAPI-Key': '1507ffcca3msh6322c84ae092af1p12c3b7jsn0bc24be91957',
            'X-RapidAPI-Host': 'juanroldan1989-moviequotes-v1.p.rapidapi.com',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });
    
})
app.get("/about", (req, res) => {
    res.render("about", {
        pagetitle: "About Page",
        metatitle: "About Page Meta Title",
        metadesc: "About Page Meta Description",
        menuactive2: "active"
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
app.get("/contact/*", (req, res) => {
    res.render("404", {
        errorcomment: "Contact Us - 404 page not found. Please visit below links"
    });
})
app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "404 page not found. Please visit below links"
    });
})

/*app.get("/", (req, res) => {
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
})*/

app.listen(port, () => {
    console.log(`Express server is started on port no ${port}`);
})