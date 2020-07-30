function auth(req, res, next) {
    if (!req.session.username) {
        res.send("Unathorized Access")
    }
    else {
        next()
    }
}

module.exports = auth