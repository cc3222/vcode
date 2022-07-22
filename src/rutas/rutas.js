const express = require('express')
const router = express.Router();
const db = require('./objetos/contactos')

/**
 * usuario-insert
 * 
 * add(id, data)
 * set
 * upt
 * getLista
 * get
*/
router.get('/',(req,res)=>{
    res.render('index',{
        titulo:"VCode",
    })
})

router.get('/ejem',async (req,res)=>{
    const lista = await db.getLista();
    res.render('ejem',{
        titulo:"ejemplo",
        data:lista
    })
})

router.post('/contactos-insert', async (req,res) =>{
    const contacto = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email
    }
    db.add(contacto.email, contacto);
    res.redirect('/ejem');
})

router.get('/contactos-update/:id', async (req,res) => {
    const {id} = req.params;
    res.render('ejem_update',{
        titulo:"VCode",
        id: id
    })

})

router.post('/contactos-update/:id', async (req,res)=>{
    const {id}= req.params
    console.log("id",id)
    const contacto = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email
    }
    db.upt(contacto.email,contacto)
    res.redirect('/ejem')
})

router.get('/contactos-delete/:id', async (req,res)=>{
    const {id}= req.params
    db.rmv(id)
    res.redirect('/ejem')
})
module.exports = router;