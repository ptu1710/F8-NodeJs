class NewsControllers {

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('OKOK')
    }
}

module.exports = new NewsControllers