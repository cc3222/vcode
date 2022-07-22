const db = require('../rutas/objetos/contactos')

const render = async (req, res) => {
    const lista = await db.getLista();
    res.render('ejem/ejem', {
        titulo: "ejemplo",
        data: lista
    })
}

const insertar = async (req, res) => {
    const contacto = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email
    }
    db.add(contacto.email, contacto);
    res.redirect('/ejem');
}

const renderUpdate = async (req, res) => {
    const { id } = req.params;
    res.render('ejem/ejem_update', {
        titulo: "VCode",
        id: id
    })
}

const actualizar = async (req, res) => {
    const { id } = req.params
    console.log("id", id)
    const contacto = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email
    }
    db.upt(contacto.email, contacto)
    res.redirect('/ejem')
}

const eliminar = async (req, res) => {
    const { id } = req.params
    db.rmv(id)
    res.redirect('/ejem')
}

module.exports = {
    render,insertar,actualizar,renderUpdate,eliminar
}