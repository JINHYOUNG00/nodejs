// import { readFile } from 'node:fs';
const fs = require('fs');

// 비동기
fs.readFile('./process.js','utf8', (err, data) => {
    if (err) console.log(err);
    // console.log(data);
});

console.log("1. start");

console.log('------------------------');
// 동기
let text = fs.readFileSync('./process.js','utf8');

// console.log(text);

// 파일 출력
let data = '파일 쓰기 테스트'
fs.writeFile('./temp.txt', data, 'utf8', (err) => {
    if(err) console.log(err);
    //부가명령
});

fs.writeFileSync('./temp2.txt', data, 'utf8');
//부가명령