const fs = require ('fs');

// const book = {
//     title: "Harry Potter",
//     author: "JK Rowling"
// }
// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json',bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const data = dataBuffer.toString()
// console.log(data);

// const dataObj = JSON.parse(data);
// console.log(dataObj.title);

var jsonData = fs.readFileSync('1-json.json');
jsonData = jsonData.toString();
jsonData = JSON.parse(jsonData);
console.log(jsonData);
jsonData.planet = 'Bhoomi';
jsonData = JSON.stringify(jsonData);
// console.log(jsonData);
fs.writeFileSync('1-json.json',jsonData);
