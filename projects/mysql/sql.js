const boardsql = require('./boardSql.js')
const todosql = require('./todoSql.js')

module.exports = {
    customerList: 'select * from customers',
    customerInsert: 'insert into customers set ?',
    customerDelete: 'delete from customers where id = ?',
    customerUpdate: 'update customers set ? where id = ?',
    ...boardsql,
    ...todosql
}