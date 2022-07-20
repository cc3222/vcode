/*
Para este proyecto se requieren las dependencias
express, ejs, parser-body, nodemon

el proyecto se corre con el comando "npm run dev"
el proyecto no requiere reiniciar el servidor este se reinicia solo al gaurdar los cambios hechos
*/

const express = require("express")
const path = require('path')
const router = require('./rutas/index')
const bodyParser = require('body-parser')
app = express()

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname,'vistas'))
app.set('view engine','ejs')
//middlewares
app.use((req,res,next) => {
    console.log(`${req.url} -${req.mehod}`)
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(router)
//
app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'),() =>{
    console.log("servidor iniciado", app.get('port'))
})

