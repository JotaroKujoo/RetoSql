const models = require("../models/index")

const peliculasController = {}

peliculasController.getPeliculas = (req,res)=>{
    models.peliculas.findAll()
    .then((resp)=>{
        res.send(resp)
    })
}

module.exports = peliculasController