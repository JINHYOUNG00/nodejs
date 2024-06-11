const express = require('express');
const query = require('../mysql/index.js');
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
    let page = Number(req.query.page);
    console.log(page)
    query("boardList",(page-1)*10)
        .then(result => res.send(result));
})

router.get('/:no', (req,res) => {
    console.log('no:', req.params.no);
    const no = req.params.no;
    query("boardGet", no)
        .then(result => res.send(result))
    // let result = board.find(e => {
    //     console.log(e);
    //     return e.no == no;
    // });
    // res.send(result);
})

const multer = require('multer');
const upload = multer({ dest: 'D:/upload/' })
router.post('/',upload.single("file") ,(req,res) => {
    // 첨부파일이 있으면
    //////
    let data = { ...req.body};
    if(req.file.filesize != null) {
        data.filename = req.file.filename;
        data.uploadfilename = req.file.uploadfilename;
    }
    //////
    console.log(req.body)
    query("boardInsert", req.body)
        .then(result => res.send(result))
    // board.push(req.body);
    // res.send('boardInsert 라우트')
})
router.put('/:no', async (req,res) => {
    const no = req.params.no;

    let result = await query("boardUpdate", [req.body, no]);
    res.send(result);
    // board = board.map((val,idx) => {
        
    //     return val.no == no ? {...val, ...req.body} : val
    // })
    
    // res.send('boardUpdate 라우트')
})
router.delete('/:no', (req,res) => {
    const no = req.params.no;
    query("boardDelete", no)
        .then(result => res.send(result));
    
    // indexOf -> split 로 하거나
    // filter된 결과를 다시 board에 담거나
    // let newBoard = board.filter((val,idx) => {

    //     return val.no != no
    // })
    // board = newBoard;

    // res.send('boardDelete 라우트')
})

module.exports = router;