const mysql = require("mysql2");

const conn = {
  connectionLimit: 10,
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "test",
};

const pool = mysql.createPool(conn);

// let name = "홍길동";
// let email = 'd@ddd.com';
// let phone = '020-1111-4444';
// let address = '서울시'
// const sql = "insert into customers(name, email, phone, address) values (?,?,?,?)";
// pool.query(sql,[name, email, phone, address], function(err, result, fileds){
//     if(err) console.log(err);
//     console.log(result);
// })

const sql = "insert into customers set ?";
const params = {name : '김길동', email: 'ddd@aaa.ccc', phone: '12-412545-485', address: '제주시'}
pool.query(sql, params, function(err, result, fileds){
    if(err) console.log(err);
    console.log(result);
})

