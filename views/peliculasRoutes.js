const express = require("express")
const router = express.Router()

const peliculasController = require("../controllers/peliculasControllers")

router.get("/",peliculasController.getPeliculas)

module.exports = router