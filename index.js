const express = require("express")
const router = require("./router")
const app = express()
const db = require("./db/db")
const {sequelize} = require("./models/index")
const PORT = 3000

app.use(router)
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Servidor lanzado en el puerto ${PORT}`)
    // sequelize.sync({force: true})
    //db.authenticate()
    db.authenticate().then(()=>{
        console.log("Conexion con la base de datos establecida")
    }).catch(error =>{
        console.log("error: " + error)

    } )

})
