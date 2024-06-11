const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js'); // index.js 생략가능

router.get('/', (req,res) => {
    query("todoList")
        .then(result => res.send(result));
})

router.post('/', (req, res)=> {
    query("todoInsert", req.body)
        .then(result => res.send(result))
})
/**
 *  { 
     "param" : [
      { "no": 1,
        "contents": "jaaaava", 
        "todoyn": 0 }
       ,1
     ]
    }
 */
router.put('/:no', async (req, res) => {
    const no = req.params.no;
    let result = await query('todoUpdate', req.body.param)
    res.send(result);
})

router.delete('/:no', (req,res) => {
    const no = req.params.no;
    query('todoDelete', no)
        .then(result => res.send(result));
})

module.exports = router;