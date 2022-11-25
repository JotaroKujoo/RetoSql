const models = require("../models/index")


const crypto = require("node:crypto");

// Service to check the password is valid

const assertValidPasswordService = (pass) => {
    if (pass.length < 8) {
        throw new Error("Password must be at least 8 characters");
    }
    if (!pass.match(/[a-z]/)) {
        throw new Error("Password must contain at least one lower case letter");
    }
    if (!pass.match(/[0-9]/)) {
        throw new Error("Password must contain at least one number")
    }
}

// Service to check the email is valid
const assertEmailIsValidService= (email) => {
    const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = email.match(emailRegex)
    if (!isValid) {
        throw new Error("Email is not valid");
    }
}

// Service to check the email is not already used
const assertEmailIsUniqueService = async (mail) => {
    const user = await models.user.findOne({
      where: {mail:mail}
    });
    if (user) {
      throw new Error("Email is already registered")
    }
}

//Service to encrypt the password and create a hash
const encryptPasswordService = (pass) => {
    const hash = crypto
        .createHmac("sha512","")
        .update(pass)
        .digest("base64");
    return hash;

}

//Service to create a new user on the database
const createUserService = async (userBody) => {
    const hash = encryptPasswordService(userBody.password);
    console.log(userBody.password)
    userBody.password = hash
    const user = await models.user.create({
        name: userBody.name,
        mail: userBody.mail,
        password: userBody.password,
        birthDate: userBody.birthDate,
        dateCreatedAcc: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        roleIdRole: userBody.roleIdRole

    });
    return user;
    

}


module.exports = {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValidService,
    encryptPasswordService,
    createUserService
}


// INSERT INTO `orders` (`idOrder`,`userIdUser`,`articleIdArticle`,`date`,`endDate`) VALUES (DEFAULT,?,?,?,?);