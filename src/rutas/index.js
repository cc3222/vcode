const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index',{
        titulo:"VCode"
    })
})

router.get('/ejem',(req,res)=>{
    res.render('ejem',{
        titulo:"ejemplo"
    })
})

router.post('/new-contact',(req,res) =>{
    console.log(req.body);
    res.send('recibido');
})

module.exports = router;