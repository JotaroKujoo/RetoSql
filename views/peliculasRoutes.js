const express = require("express")
const router = express.Router()

const peliculasController = require("../controllers/peliculasControllers")

router.get("/",peliculasController.getPeliculas)
router.get("/getpeliculaid/:id",peliculasController.getPeliculasById)
router.get("/getpeliculagenre/:genre",peliculasController.getPeliculasByGenre)
router.get("/getpelicularating/",peliculasController.getPeliculasByRating)

module.exports = router