const fs = require('fs');

fs.writeFileSync("read.txt", "this is first text file.");

fs.appendFileSync("read.txt", " Hello How are You?");

const readData = fs.readFileSync("read.txt");

console.log(readData.toString());

fs.renameSync("read.txt", "readWrite.txt");
