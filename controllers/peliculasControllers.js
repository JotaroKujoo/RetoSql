const models = require("../models/index")

const peliculasController = {}

peliculasController.getPeliculas = (req,res)=>{
    models.peliculas.findAll()
    .then((resp)=>{
        res.send(resp)
    })
}

peliculasController.getPeliculasById = async (req,res)=>{
    try {
        let resp = await models.peliculas.findAll({
            where: {id_pelicula: req.params.id}
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
        
    }
}

peliculasController.getPeliculasByGenre = async (req,res)=>{
    try {
        let resp = await models.peliculas.findAll({
            where: {genre: req.params.genre}
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}


peliculasController.getPeliculasByRating = async (req,res)=>{
    try {
        let resp = await models.peliculas.findAll({
            where: {rating : [8,9,10]}
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}

module.exports = peliculasController