const express = require("express")
const router = express.Router()

const seriesControllers = require("../controllers/seriesControllers")

router.get("/",seriesControllers.getSeries)
router.get("/getserieid/:id",seriesControllers.getSeriesById)
router.get("/getseriegenre/:genre",seriesControllers.getSeriesByGenre)
router.get("/getseriesrating/",seriesControllers.getSeriesByRating)
router.get("/getseriestitle/:title",seriesControllers.getSeriesByTitle)


module.exports = router