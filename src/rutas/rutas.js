const express = require('express')
const router = express.Router();
const db = require('./objetos/contactos')
const ejem = require('../controladores/ejem')
//Funciones de la pagina principal
router.get('/',(req,res)=>{
    res.render('index',{
        titulo:"Inicio",
    })
})
//

router.get('/acerca-de',async (req,res)=>{
    res.render('basicas/acerca_de',{
        titulo:"Acerca de nosotros"
    })
})
router.get('/materias',(req,res)=>{
    res.render('basicas/materias',{ 
        titulo:"materias"
    })
})
router.get('/contactanos',(req,res)=>{
    res.render('basicas/conocenos',{ 
        titulo:"Contactanos"
    })
})

router.get('/usuarios-registro',(req,res)=>{
    res.render('basicas/registro',{ 
        titulo:"registro"
    })
})


//Funciones de ejemplo
router.get('/ejem',ejem.render)
router.post('/contactos-insert', ejem.insertar)
router.get('/contactos-update/:id',ejem.renderUpdate)
router.post('/contactos-update/:id',ejem.actualizar)
router.get('/contactos-delete/:id',ejem.eliminar)
module.exports = router;