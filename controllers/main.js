const mainController = {

    learn:(req, res, next) => {
        res.render("learn")
    },
    teach:(req, res, next) => {
        res.render("teach")
    },
    config:(req, res, nex) =>{
        res.render('config')
    },
    delete:(req,res,next) =>{
        res.render('delete')
    },
    advanced:(req, res, next) => {
        res.render("advanced")
    },
    beginner:(req, res, next) => {
        res.render("beginner")
    },
    intensive:(req, res, next) => {
        res.render("intensive")
    }
}

module.exports = mainController;