//Handle the 404 page
exports.get404 = (req, res, next) => {
    res.render('pages/404', {
        title: '404 - Page Not Found'
    })
}