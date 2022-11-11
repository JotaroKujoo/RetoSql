const express = require("express")
const router = express.Router()

const peliculasRoutes = require("./views/peliculasRoutes")
const seriesRoutes = require("./views/seriesRoutes")

router.use("/peliculas", peliculasRoutes )
router.use("/series", seriesRoutes)

module.exports = router