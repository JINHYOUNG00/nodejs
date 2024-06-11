const mysql = require("mysql2");
const sql = require('./sql.js');
require('dotenv').config({path:'mysql/.env'});

const conn = {
  connectionLimit: process.env.MYSQL_LIMIT,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
};

const pool = mysql.createPool(conn);

function query(alias, values){
    return new Promise((resolve, reject) => {
        pool.query(sql[alias], values, function(err, result) {
            if(err) {
                console.log(err);
                reject({err});
            } else {
                resolve(result)
            }
        } )
    });
}

module.exports = query;