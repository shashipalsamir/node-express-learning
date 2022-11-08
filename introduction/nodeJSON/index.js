const http =  require("http");
const fs = require("fs");
const path = require('path');

// const bioData = {
//     name: "Shashi",
//     age: "38",
//     desg: "Front End Developer"
// }
// convert to json
// cretae json file
// read file
// convert back to json object
// condole log

//const jsonData = JSON.stringify(bioData);


/*fs.writeFile("data.json", jsonData, (err) => {
    console.log('file created');
})

fs.readFile("data.json", "utf-8", (err, data) => {
    const orgData = JSON.parse(data);
    console.log(orgData);
})*/

const server = http.createServer((req, res) => {
   



    if (req.url == "/"){
        res.end("Home Page");
    } else if (req.url == "/about") {
        res.end("About Us Page");
    } else if (req.url == "/contact") {
        res.end("Contact Us Page"); 
    } else if (req.url == "/userapi") { 
        //res.writeHead(200, { 'Content-Type': 'application/json'});
        fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {
            const dd = data;
            res.end(dd)
        });
    } else {
        res.writeHead(404, "Error Page", {"Content-type": "text/html"});
        fs.readFile(`${__dirname}/public/404.html`, (error, data) => {
            if(error) throw error;
            res.end(data);    
        });
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("listening to port no. 8000");
})