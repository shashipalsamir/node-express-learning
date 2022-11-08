const path = require('path');

const dirName = path.dirname("E:/projects/nodejs/introduction/fsAsynch/read.txt");
const extName = path.extname("E:/projects/nodejs/introduction/fsAsynch/read.txt");
const fileName = path.basename("E:/projects/nodejs/introduction/fsAsynch/read.txt");
console.log(`Folder path is = [ ${dirName} ]`);
console.log(`File extension is [ ${extName} ]`);
console.log(`File Name is [ ${fileName} ]`);


const filePath = path.parse("E:/projects/nodejs/introduction/fsAsynch/read.txt");

console.log(filePath.name);