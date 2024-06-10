// import process from 'process'
const process =  require('process');
const os = require('os');
// 프로세스 이벤트
process.on('beforeExit', (code) => {
    console.log('2. 종료 직전',code);
});

process.on('exit', (code) => {
    console.log('3. 종료될때',code);
});
// process.exit();
console.log('1. 첫번재 메시지');
// console.log(process.env);
// end

console.log('hostname', os.hostname());
console.log('type', os.type());
console.log('homedir', os.homedir());