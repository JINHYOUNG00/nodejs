const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js'); // index.js 생략가능

router.get('/' ,(req,res) => {
    query("customerList")
        .then(result => res.send(result));
})
router.post('/' ,(req,res) => {
    console.log(req.body)
    query("customerInsert", req.body)
        .then(result => res.send(result));
})
// router.put('/:id' ,(req,res) => {
//     const id = req.params.id;
//     console.log(req.body);
//     query("customerUpdate", [req.body, id])
//     .then(result => res.send(result));
// })
router.put('/:id' ,async (req,res) => {
    const id = req.params.id;
    console.log(req.body);
    let result = await query("customerUpdate", req.body.param)
    res.send(result);
})
router.delete('/:id' ,(req,res) => {
    const id = req.params.id;
    query("customerDelete", id)
        .then(result => res.send(result));
})

module.exports = router;