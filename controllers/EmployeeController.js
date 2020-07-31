const { Employee } = require("../models")

class EmployeeController {

    // Read
    static show(req, res) {
        Employee.findAll()
            .then(employees => res.render("employees", { employees, nav: 'employee' }))
            .catch(err => res.send(err))
    }

    static addGet(req, res) {
        if (req.query.error) {
            res.render("addEmployee", { err: req.query.error, nav: 'employee' })
        }
        else {
            res.render("addEmployee", { err: null, nav: 'employee' })
        }
    }

    static addPost(req, res) {
        const { firstName, lastName, position, gender, salary, WarehouseId } = req.body
        const employeeObj = { firstName, lastName, position, gender, salary, WarehouseId }

        Employee.create(employeeObj)
            .then(() => res.redirect("/employees"))
            .catch(err => res.send(err))
    }

    static editGet(req, res) {
        let id = +req.params.id
        Employee.findByPk(id)
            .then((employee) => {
                if (!req.query.error) {
                    res.render("editEmployee", { employee, err: null, nav: 'employee' })
                }
                else {
                    res.render("editEmployee", { employee, err: req.query.error, nav: 'employee' })
                }
            })
            .catch(err => res.send(err))
    }

    static editPost(req, res) {
        const { firstName, lastName, position, gender, salary, WarehouseId } = req.body
        const employeeObj = { firstName, lastName, position, gender, salary, WarehouseId }
        let id = +req.params.id

        Employee.update(employeeObj, { where: { id } })
            .then(() => res.redirect("/employees"))
            .catch(err => res.send(err))
    }

    static delete(req, res) {
        let id = +req.params.id
        Employee.destroy({ where: { id } })
            .then(() => res.redirect("/employees"))
            .catch(err => res.send(err))
    }
}

module.exports = EmployeeController
