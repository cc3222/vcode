const bd = require('./bd')

const conexion = bd.collection('contactos')

const contacto = {
    nombre: String,
    apellidos: String,
    email: String
}

async function add(id = String, datos = contacto) {
    await conexion.doc(id).set(datos)
}

async function upt(id = String, datos = contacto) {
    const res = await conexion.doc(id).set(datos)
}
async function get(id = String) {
    const doc = await conexion.doc(id).get()
    return doc;
}

async function rmv(id) {
    await conexion.doc(id).delete();
}

async function getLista() {
    const docs = await conexion.get();
    const lista = []
    docs.forEach(doc => {
        lista.unshift(doc.data())
    })
    return lista
}

async function getListaWhere(campo = String, operador = String, valor) {
    const docs = await conexion.where(campo, operador, valor).get();
    const lista = []
    docs.forEach(doc => {
        lista.unshift(doc.data())
    })
    return lista
}

module.exports = {
    add, upt, rmv, getLista, getListaWhere, get
}
