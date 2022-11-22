const models = require('../models/index');

const orderControllers = {}



//Order a movie

orderControllers.orderMovie = async (req, res) => {
    try {
        let body = req.body;
        delete body.date
        delete body.endDate
        if (body.mail === req.auth?.mail) {
            let movie = await models.movie.findOne({
                where: { title: body.title }
            })
            let repeated = await models.order.findOne({
                where: {
                    userIdUser: req.auth.id,
                    articleIdArticle: movie.articleIdArticle,
                    endDate: null
                }
            })

            if (!repeated) {
                let resp = await models.order.create({
                    date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                    endDate: null,
                    userIdUser: req.auth.id,
                    articleIdArticle: movie.articleIdArticle
                })
                res.status(200).json({
                    message: "You cant rent movie more than once time"
                })
            }
        }
    } catch (error) {
        res.json({ message: "Error while creating order" })
    }

}


//Order a serie

orderControllers.orderSerie = async (req, res) => {
    try {
        let body = req.body;
        delete body.date
        delete body.endDate
        if (body.mail === req.auth?.mail) {
            let serie = await models.serie.findOne({
                where: { title: body.title }
            })
            let repeated = await models.order.findOne({
                where: {
                    userIdUser: req.auth.id,
                    articleIdArticle: serie.articleIdArticle
                }
            })

            if (!repeated) {
                let resp = await models.order.create({
                    date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                    endDate: null,
                    userIdUser: req.auth.id,
                    articleIdArticle: movie.articleIdArticle
                })
                res.status(200).json({
                    message: "You cant rent serie more than once time"
                })
            }
        }
    } catch (error) {
        res.json({ message: "Error while creating order" })
    }
}

//Finish an Order

orderControllers.finishOrder = async (req, res) => {
    try {
        let body = req.body;
        let movie = await models.movie.findOne({
            where: { title: body.title }
        })
        let orderedMovie = await models.order.findOne({
            where:{
                articleIdArticle: movie.articleIdArticle,
                endDate: null
            }
        })
        console.log(orderedMovie)
        if (body.mail === req.auth?.mail && movie.articleIdArticle === orderedMovie.articleIdArticle){
            let resp = await models.order.update({
                endDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
            },
            {
                where: {
                    articleIdArticle: orderedMovie.articleIdArticle,
                }
            }
            )
        }
        res.status(200).json({
            message: `order finished to movie ${movie.title}`
        })

    }catch(error){
        res.json({ message: "That movie is not ordered" })
    }
}

orderControllers.getMyOrders = async (req,res) => {
    let resp = await models.order.findAll({
        where: {
            userIdUser: req.auth.id
        }
    })
    res.status(200).json({
        resp,
        message: "Here are your orders"
    })
}