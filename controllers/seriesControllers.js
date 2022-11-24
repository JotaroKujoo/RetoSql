const models = require("../models/index")

const seriesControllers = {}

seriesControllers.getSeries = async (req, res) => {
   try {
    let resp = await models.serie.findAll({})
    res.status(200).json({
        resp,
        message: "Here is all series"
    })
   } catch (error) {
    console.log(error)
   }
}

seriesControllers.getSeriesById = async (req, res) => {
    try {
        let resp = await models.serie.findAll({
            where: { idSerie: req.params.id }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)

    }
}



seriesControllers.getSeriesByGenre = async (req, res) => {
    try {
        let resp = await models.serie.findAll({
            where: { genre: req.params.genre }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}

seriesControllers.getSeriesByRating = async (req, res) => {
    try {
        let resp = await models.serie.findAll({
            where: { rating: [8, 9, 10] }
        })
        res.send(resp)
    } catch (error) {
        console.error(error)
    }
}

seriesControllers.getSeriesByTitle = async (req, res) => {
    try {
        let resp = await models.serie.findAll({
            where: { title: req.params.title }
        })
        res.send(resp)
    } catch (err) {
        console.error(err)
    }
}



module.exports = seriesControllers