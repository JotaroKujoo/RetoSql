const {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValidService,
    encryptPasswordService,
    createUserService
} = require("../services/AuthServices")

require("dotenv").config();

const jsonwebtoken = require("jsonwebtoken");

const authRegisterController = async (req,res)=>{
    const body =  await req.body;

    //Check the password has valid structure
    if (body === undefined){
        console.log("Algo va mal con el body, es indefinido")
    }

    try {
        assertValidPasswordService(body.password)
    } catch (error) {
        console.log("Invalid password")
        res.status(400).send(`Invalid password here`)
        return;

    }

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
        const newUser = await createUserService(body.mail,body.password);
        res.status(201).json(newUser);
        return;
    }catch(error){
        console.error(error)
        res.status(500).json({message:error.message})
    }
}

//Login controller

const authLoginController = async (req,res)=>{
    const {mail,password} = req.body;

    //Find the user by his mail
    
    try {
        const userFounded = await models.user.findOne({
            where: {
                mail: mail
            }
        });
        if(!userFounded){
            res.status(401).json({message:" wrong email"})
        }
    
        //Encrypt the password and check if it matches with hash on the Database
    
        const hashedPassword = await encryptPasswordService(password);
    
        if(userFounded.password!== hashedPassword){
            res.status(401).json({message:" wrong password"})
        }
        
        const secret = process.env.SECRET_KEY
    
        if (secret.length < 6){
            throw new Error("JWT_SECRET is not set")
        }
    
        const jwt = jsonwebtoken.sign({
            mail: userFounded.mail,
            id: userFounded.idUser,
            role: userFounded.roleIdRole
        },secret)
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