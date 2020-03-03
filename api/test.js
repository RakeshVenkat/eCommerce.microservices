var express = require('express');
const path = require('path');
var app = express()

console.log(__dirname);
console.log(path.join(__dirname, 'public'));
console.log(process.cwd());
console.log(path.join(process.cwd(), 'public'));
app.use(express.static(path.join(process.cwd(), 'public')));


const fs = require('fs');
const currentDirPath = path.join(__dirname, '/swamp-pix');
//fs.mkdirSync(currentDirPath); 

const filePath = path.join(__dirname, '/swamp-pix/bayou.jpeg');
fs.openSync(filePath, 'a');

app.listen(3001, () => {
    console.log('App is running at');
})