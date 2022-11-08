const http =  require("http");
const fs = require("fs");
const path = require('path');

const dir = "public/";

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            if (req.url == "/"){
                res.end("Home Page");
            } else if (req.url == "/about") {
                res.end("About Us Page");
            } else if (req.url == "/contact") {
                res.end("Contact Us Page"); 
            } else {
                res.writeHead(404, "Error Page", {"Content-type": "text/html"});
                fs.readFile(dir + "404.html", (error, data) => {
                    if(error) throw error;
                    res.end(data);    
                });
            }
            break;
        case 'POST':
            break;
        default:
            break;
    }    
})

server.listen(8000, '127.0.0.1', () => {
    console.log("listening to port no. 8000");
})