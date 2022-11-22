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

orderControllers.editOrder = async (req, res) => {
    try {
        let body = req.body;
        delete body.date
        delete body.endDate
        if (body.mail === req.auth?.mail) {}
    }catch(error){
        res.json({ message: "Error while creating order" })
        
    }
}