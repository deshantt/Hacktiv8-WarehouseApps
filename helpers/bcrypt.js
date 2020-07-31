const bcrypt = require("bcryptjs")

function hash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

function compare(formPassword, userPassword) {
    return bcrypt.compareSync(formPassword, userPassword)
}


module.exports = { hash, compare }