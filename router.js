const express = require("express")
const router = express.Router()

const moviesRoutes = require("./views/moviesRoutes")
const seriesRoutes = require("./views/seriesRoutes")
const authRoutes = require("./views/authRoutes")
const orderRoutes = require("./views/orderRoutes")
const {authBearerMiddleware} = require("./middlewares/authMiddleware")
const userRoutes = require("./views/userRoutes")

router.use("/movies", moviesRoutes )
router.use("/series", seriesRoutes)
router.use("/auth", authRoutes)
router.use(authBearerMiddleware)
router.use("/order", orderRoutes)
router.use("/users",userRoutes)

module.exports = router