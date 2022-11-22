const express = require("express")
const router = express.Router()

const moviesRoutes = require("./views/moviesRoutes")
const seriesRoutes = require("./views/seriesRoutes")
const authRoutes = require("./views/authRoutes")


router.use("/movies", moviesRoutes )
router.use("/series", seriesRoutes)
router.use("/auth", authRoutes)

module.exports = router