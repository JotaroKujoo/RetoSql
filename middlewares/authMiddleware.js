const jsonwebtoken = require('jsonwebtoken')

const authBearerMiddleware = async (req,res,next) => {
    const {authorization} = req.headers
    const [strategy2,jwt] = authorization.split(" ")
    try{
        
        const payload = jsonwebtoken.verify(jwt, "paraquequieressaberlo")
        req.auth = payload
        next()
    }catch(error){
        res.status(401).json({message: "You re not authenticated, try to login again"});
        return;
    }
}

//Middleware to check the role of the user is authorized to access the desired endpoint.
const isValidRole = (role) =>(req,res)=> {
    if (req.auth?.role === role){
        next()
    }else{
        res.status(403).json({message: "Your not authorized"})
    }
}
//Middleware to check if the user is authorized to access the desired endpoint.

const isValidUser = (mail) => async(req,res,next) => {
    mail = req.params.mail || req.body.mail
    console.log(mail)
    console.log(req.auth.mail)
    if (req.auth?.mail === mail){
        next()
    }else{
        res.status(403).json({message: "Your not authorized"})
    }
}

module.exports = {
    authBearerMiddleware,
    isValidRole,
    isValidUser
}

