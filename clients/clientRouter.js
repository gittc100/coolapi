const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send(`GET /client endpoints`);
});

router.get('/:id', (req,res)=>{
    res.send(`GET /client/${req.params.id} endpoints`);
});

module.exports = router;