const models = require("../models/index")

const peliculasControllers = {}

peliculasControllers.getPeliculas = (req, res) => {
    models.peliculas.findAll()
        .then((resp) => {
            res.send(resp)
        })
}

peliculasControllers.getPeliculasById = async (req, res) => {
    try {
        let resp = await models.peliculas.findAll({
            where: { id_pelicula: req.params.id }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)

    }
}

peliculasControllers.getPeliculasByGenre = async (req, res) => {
    try {
        let resp = await models.peliculas.findAll({
            where: { genre: req.params.genre }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}


peliculasControllers.getPeliculasByRating = async (req, res) => {
    try {
        let resp = await models.peliculas.findAll({
            where: { rating: [8, 9, 10] }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}

peliculasControllers.getPeliculasByTitle = async (req, res) => {
    try {
        let resp = await models.peliculas.findAll({
            where: { title: req.params.title }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}
module.exports = peliculasControllers