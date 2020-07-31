const { Product, Warehouse } = require("../models")
const warehouse = require("../models/warehouse")

class WarehouseController {

    // Read
    static show(req, res) {
        Warehouse.findAll()
            .then(warehouses => {
                console.log(warehouses)
                res.render("warehouses", { warehouses , nav: 'warehouse' })
            })
            .catch(err => res.send(err))
    }

    static addGet(req, res) {
        if (req.query.error) {
            res.render("addWarehouse", { err: req.query.error , nav: 'warehouse'})
        }
        else {
            res.render("addWarehouse", { err: null , nav: 'warehouse'})
        }
    }

    static addPost(req, res) {
        const { city, address, leaseExpiryDate } = req.body
        const warehouseObj = { city, address, leaseExpiryDate }

        Warehouse.create(warehouseObj)
            .then(() => res.redirect("/warehouses"))
            .catch(err => res.send(err))
    }

    static editGet(req, res) {
        let id = +req.params.id
        Warehouse.findByPk(id)
            .then((warehouse) => {
                if (!req.query.error) {
                    res.render("editWarehouse", { warehouse, err: null , nav: 'warehouse'})
                }
                else {
                    res.render("editWarehouse", { warehouse, err: req.query.error, nav: 'warehouse' })
                }
            })
            .catch(err => res.send(err))
    }

    static editPost(req, res) {
        const { city, address, leaseExpiryDate } = req.body
        const warehouseObj = { city, address, leaseExpiryDate }
        let id = +req.params.id

        Warehouse.update(warehouseObj, { where: { id } })
            .then(() => res.redirect("/warehouses"))
            .catch(err => res.send(err))
    }

    static delete(req, res) {
        let id = +req.params.id
        Warehouse.destroy({ where: { id } })
            .then(() => res.redirect("/warehouses"))
            .catch(err => res.send(err))
    }
}

module.exports = WarehouseController
