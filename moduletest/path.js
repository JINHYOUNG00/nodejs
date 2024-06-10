const path = require('path');

console.log(__filename);
console.log(path.extname(__filename));
console.log(path.dirname(__filename));
console.log("dd"+path.extname('index.html'));

console.log(path.join("/temp",'/upload',"abc.txt"))

let file = path.parse('/temp/upload/abc.txt');
console.log(file);