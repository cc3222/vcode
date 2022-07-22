const bd = require('./bd')

const conexion = bd.collection('usuarios')

const alumnos = {
    nombre: String,
    apellidos: String,
    email: String,
    telefono: String,
    nivel: String,
    grado: String,
    escuela: String,
    materias: [],
    puntos: int,
}

async function add(id = String, datos = alumnos) {
    await conexion.doc(id).set(datos)
}

async function upt(id = String, datos = alumnos) {
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

