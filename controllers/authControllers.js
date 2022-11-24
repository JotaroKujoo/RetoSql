const {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValidService,
    encryptPasswordService,
    createUserService
} = require("../services/AuthServices")

const models = require("../models/index")

require("dotenv").config();
const express = require("express")

let bodyParser = require("body-parser")
const app = express()




const jsonwebtoken = require("jsonwebtoken");

const authRegisterController = async (req,res)=>{
    const body =  await req.body;
    //Check the password has valid structure
    try {
        assertValidPasswordService(body.password)
        
        console.log(body.password, "Aqui el body pass")
    } catch (error) {
        res.status(400).send(`Invalid password here`)
        return;

    }

    console.log("Password is valid")

    //Check the email has valid structure
    try {
        assertEmailIsUniqueService(body.mail)
    } catch(error){
        console.error(error);
        res.status(400).send("Invalid email or password")
        return;

    }

    //Check the email has been registered
    try {
        assertEmailIsValidService(body.mail)
    } catch (error) {
        console.error(error);
        res.status(400).send("This mail is already in use")
        return;
        
    }

    //Create a new user
    try {
        const newUser = await createUserService(body);
        res.status(201).json(newUser);
        return;
    }catch(error){
        console.error(error)
        res.status(500).json({message:error.message})
    }

}

//Login controller

const authLoginController = async (req,res)=>{
    const body = req.body;
    //Find the user by his mail
    
    try {
        const userFounded = await models.user.findOne({
            where: {
                mail: body.mail.toString(),
            }
        });

        if(!userFounded){
            res.status(401).json({message:" wrong email"})
        }
        
        

        //Encrypt the password and check if it matches with hash on the Database
    
        const hashedPassword = await encryptPasswordService(body.password);

    
        if(userFounded.password!== hashedPassword){
            res.status(401).json({message:" wrong password"})
        }
        
        const secret = "paraquequieressaberlo"
    
        if (secret.length < 6){
            throw new Error("JWT_SECRET is not set")
        }
    
        const jwt = jsonwebtoken.sign({
            mail: userFounded.mail,
            id: userFounded.idUser,
            role: userFounded.roleIdRole
        },secret)
        console.log("Your token is ",jwt)
        res.status(200).json({
            message: "Login successful",
            yourToken: jwt
    
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    authRegisterController,
    authLoginController
}