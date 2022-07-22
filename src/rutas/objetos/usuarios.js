const bd = require('./bd')

const conexion = bd.collection('usuarios')

async function add(id, datos) {
    await conexion.doc(id).set(datos)
}

async function upt(id, datos) {
    await conexion.doc(id).update(datos)
}

async function getLista(id, datos) {
    const lista = await conexion.get();
    return lista
}

async function get(id, datos) {
    await conexion.doc(id).update(datos)
}

module.exports = {
    add,upt,getLista,get
}

