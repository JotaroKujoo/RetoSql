const express = require("express");

const router = express.Router()

const userControllers = require("../controllers/usersControllers")
const {isValidUser,isValidRole} = require("../middlewares/authMiddleware")


//Get data from user
router.get("/",isValidUser(),userControllers.getMyData)

//Update user
router.patch("/",isValidUser(),userControllers.updateUser)


//Delete user ONLY ADMIN
router.delete("/:mail",isValidRole(1),isValidUser(),userControllers.deleteUser)

module.exports = router
