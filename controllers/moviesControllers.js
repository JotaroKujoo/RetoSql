const models = require("../models/index")

const moviesControllers = {}

moviesControllers.getAllMovies = (req, res) => {
    models.movie.findAll()
        .then((resp) => {
            res.send(resp)
        })
}

moviesControllers.getMoviesById = async (req, res) => {
    try {
        let resp = await models.movie.findAll({
            where: { idMovie: req.params.id }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)

    }
}

moviesControllers.getMoviesByGenre = async (req, res) => {
    try {
        let resp = await models.movie.findAll({
            where: { genre: req.params.genre }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}


moviesControllers.getMoviesByRating = async (req, res) => {
    try {
        let resp = await models.movie.findAll({
            where: { rating: [8, 9, 10] }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}

moviesControllers.getMoviesByTitle = async (req, res) => {
    try {
        let resp = await models.movie.findAll({
            where: { title: req.params.title }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}
module.exports = moviesControllers