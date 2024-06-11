module.exports = {
    boardList: 'select * from board order by no desc limit ?,10',
    boardGet: 'select * from board where no = ?',
    boardInsert: 'insert into board set ?',
    boardDelete: 'delete from board where no = ?',
    boardUpdate: 'update board set ? where no = ?'
}