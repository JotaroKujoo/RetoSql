const models = require("../models/index")

const seriesControllers = {}

seriesControllers.getSeries = (req, res) => {
    models.series.findAll()
        .then((resp) => {
            res.send(resp)
        })
}

seriesControllers.getSeriesById = async (req, res) => {
    try {
        let resp = await models.series.findAll({
            where: { id_serie: req.params.id }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)

    }
}



seriesControllers.getSeriesByGenre = async (req, res) => {
    try {
        let resp = await models.series.findAll({
            where: { genre: req.params.genre }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}

seriesControllers.getSeriesByRating = async (req, res) => {
    try {
        let resp = await models.series.findAll({
            where: { rating: [8, 9, 10] }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}

seriesControllers.getSeriesByTitle = async (req, res) => {
    try {
        let resp = await models.series.findAll({
            where: { title: req.params.title }
        })
        res.send(resp)
    } catch (err) {
        console.error(err)
    }
}



module.exports = seriesControllers