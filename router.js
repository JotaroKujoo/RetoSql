const express = require("express")
const router = express.Router()

const peliculasRoutes = require("./views/peliculasRoutes")

router.use("/peliculas", peliculasRoutes )

module.exports = router