const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 8000;

//public static path
const staticPath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./templates/views");
const partialPath = path.join(__dirname, "./templates/partials");

console.log(templatePath);
console.log(partialPath);
// to set the view engine
//app.engine('.hbs', exphandlebars.engine({ extname: '.hbs', defaultLayout: "layout"}));
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/weather", (req, res) => {
    res.render('weather');
})

app.get("*", (req, res) => {
    res.send('404 error page oops');
})

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})