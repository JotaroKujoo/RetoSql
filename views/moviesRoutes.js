const express = require("express")
const router = express.Router()

const moviesController = require("../controllers/moviesControllers")

router.get("/",moviesController.getAllMovies)
router.get("/getmoviesid/:id",moviesController.getMoviesById)
router.get("/getmoviesgenre/:genre",moviesController.getMoviesByGenre)
router.get("/getmoviesrating/",moviesController.getMoviesByRating)
router.get("/getmoviestitulo/:title",moviesController.getMoviesByTitle)

module.exports = router