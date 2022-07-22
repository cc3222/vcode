const express = require('express')
const router = express.Router();
const db = require('./objetos/contactos')
const ejem = require('../controladores/ejem')
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

//Funciones de ejemplo
router.get('/ejem',ejem.render)
router.post('/contactos-insert', ejem.insertar)
router.get('/contactos-update/:id',ejem.renderUpdate)
router.post('/contactos-update/:id',ejem.actualizar)
router.get('/contactos-delete/:id',ejem.eliminar)
module.exports = router;