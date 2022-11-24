const express = require("express")
const router = express.Router()

const orderController = require("../controllers/orderController")
const { isValidUser, isValidRole } = require("../middlewares/authMiddleware")


//Order a movie

router.post("/movie",isValidUser(),orderController.orderMovie)

//Order a serie
router.post("/serie",isValidUser(),orderController.orderSerie)

//Finish an order
router.post("/endorder",isValidUser(),orderController.finishOrder)

//Get orders by user with the Payload
router.get("/getmyorders",isValidUser(),orderController.getMyOrders)


//ADMIN ROOTS

//ORDERS IN USE
router.get("/getordersinuse",isValidRole(1),isValidUser,orderController.getAllOrdersInUse)
//ALL THE ORDERS
router.get("/getallorders",isValidRole(1),isValidUser,orderController.getAll)
//ALL THE ORDERS FROM AN USER
router.get("/getordersbyuser",isValidRole(1),isValidUser,orderController.getByUser)

module.exports = router