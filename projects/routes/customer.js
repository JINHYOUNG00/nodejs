const express = require('express');
const router = express.Router();

router.get('/' ,(req,res) => {
    res.send('1');
})
router.post('/' ,(req,res) => {
    res.send('2');
})
router.put('/' ,(req,res) => {
    res.send('3');
})
router.delete('/' ,(req,res) => {
    res.send('4');
})

module.exports = router;