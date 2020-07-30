const { Product, Warehouse } = require("../models")

class ProductController {

    // Read
    static show(req, res) {
        Product.findAll()
            .then(products => res.render("products", { products, nav: 'product' }))
            .catch(err => res.send(err))
    }

    static addGet(req, res) {
        if (req.query.error) {
            res.render("addProduct", { err: req.query.error, nav: 'product'  })
        }
        else {
            res.render("addProduct", { err: null , nav: 'product' })
        }
    }

    static addPost(req, res) {
        const { name, category, expiryDate, price } = req.body
        const productObj = { name, category, expiryDate, price }

        Product.create(productObj)
            .then(() => res.redirect("/products"))
            .catch(err => res.send(err))
    }

    static editGet(req, res) {
        let id = +req.params.id
        Product.findByPk(id)
            .then((product) => {
                if (!req.query.error) {
                    res.render("editProduct", { product, err: null , nav: 'product' })
                }
                else {
                    res.render("editProduct", { product, err: req.query.error , nav: 'product' })
                }
            })
            .catch(err => res.send(err))
    }

    static editPost(req, res) {
        const { name, category, expiryDate, price } = req.body
        const productObj = { name, category, expiryDate, price }
        let id = +req.params.id

        Product.update(productObj, { where: { id } })
            .then(() => res.redirect("/products"))
            .catch(err => res.send(err))
    }

    static delete(req, res) {
        let id = +req.params.id
        Product.destroy({ where: { id } })
            .then(() => res.redirect("/products"))
            .catch(err => res.send(err))
    }
}

module.exports = ProductController
