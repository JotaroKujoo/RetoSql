const userControllers = {}

const models = require("../models/index")

const {encryptPasswordService} = require("../services/AuthServices")



//Get the data from my own profile

userControllers.getMyData = async (req, res) => {
    let mail = req.auth.mail
    let resp = await models.user.findAll({
        where :{
            mail:mail
        }
    })
    res.send(resp)
}

userControllers.updateUser = async (req, res) => {
    const mail = req.params.mail
    const user = req.body
    const userFound = await models.user.findOne({
        where : {
            mail: req.auth.mail
        }
    })    
    console.log(userFound)
    let newPassword = userFound.password
    if (user.password){
        newPassword = encryptPasswordService(user.password)
    }

    let resp = await models.user.update(
        {
            name: user.name,
            mail: user.mail,
            password: newPassword
        },
        {
            where : {
                mail:mail
            }
        }
    )
    res.json({
        resp,
        message: "User updated"
    })
}

//Delete a user ONLY ADMIN

userControllers.deleteUser = async (req,res) => {
    const mail = req.params.mail
    let resp = await models.user.destroy({
        where: {
            mail: mail,
        }
    })
    res.json({
        resp,
        message:"User has been deleted"
    })
}

module.exports = userControllers;