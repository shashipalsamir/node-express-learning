const fs = require('fs');

fs.writeFile("read.txt", "this file is created asynchronous way.", (err) => {
    console.log('File is created');
})

fs.readFile("read.txt", 'UTF-8', (err, data) => {
    console.log(data);
})