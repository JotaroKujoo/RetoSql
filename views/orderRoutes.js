const express = require("express")
const router = express.Router()

const orderController = require("../controllers/orderController")
const { isValidUser, isValidRole } = require("../middlewares/authMiddleware")


//Order a movie

router.post("/movie",isValidUser(),orderController.orderMovie)

module.exports = router