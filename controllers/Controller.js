const { Employee, EmployeeCredential } = require("../models")
const { compare } = require("../helpers/bcrypt")

class Controller {
    static home(req, res) {
        if (!req.session.count) {
            req.session.count = 1
        }
        else {
            req.session.count++
        }
        res.render("home")
    }

    static login(req, res) {
        console.log(req.body)
        EmployeeCredential.findOne({ where: { username: req.body.username } })
            .then(data => {
                if (!data) {
                    res.redirect("/")
                }
                else {
                    if (compare(req.body.password, data.password)) {
                        req.session.username = data.username
                        res.redirect("/employees")
                    } else {
                        res.send("invalid username/password")
                    }
                }
            })
            .catch(err => res.send(err))
    }

    static registerGet(req, res) {
        res.render('register')
    }

    static registerPost(req, res) {
        // console.log(req.body)
        let { username, password } = req.body
        let userObj = { username, password }
        EmployeeCredential.create(userObj)
            .then(data => {
                res.redirect("/")
            })
            .catch(err => res.send(err))
    }

}

module.exports = Controller