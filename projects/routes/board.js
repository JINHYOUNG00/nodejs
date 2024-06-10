const express = require('express');
const router = express.Router();
let no = 2;
board = [
    {
    "no":1,
    "title": "tutke",
    "writer": "writer",
    "content": "content"
  }
];

router.get('/', (req,res) => {
    console.log(new Date(req.requestTime).toLocaleString());
    res.send(board)
})
router.get('/:no', (req,res) => {
    console.log('no:', req.params.no);
    const no = req.params.no;
    let result = board.find(e => {
        console.log(e);
        return e.no == no;
    });
    res.send(result);
})
router.post('/', (req,res) => {
    console.log(req.body)
    board.push(req.body);
    res.send('boardInsert 라우트')
})
router.put('/:no', (req,res) => {
    const no = req.params.no;

    board = board.map((val,idx) => {
        console.log(val)
        return val.no == no ? {...val, ...req.body} : val
    })
    
    res.send('boardUpdate 라우트')
})
router.delete('/:no', (req,res) => {
    // indexOf -> split 로 하거나
    // filter된 결과를 다시 board에 담거나
    let newBoard = board.filter((val,idx) => {

        return val.no != no
    })
    board = newBoard;

    res.send('boardDelete 라우트')
})

module.exports = router;