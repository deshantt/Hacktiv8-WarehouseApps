const express = require("express")
const router = express.Router()

const employeeRouter = require("./employee")
const productRouter = require("./product")
const warehouseRouter = require("./warehouse")

const Controller = require("../controllers/Controller")

const auth = require("../middlewares/auth")

router.get("/", Controller.home)

router.post("/login", Controller.login)

router.get("/register", Controller.registerGet)
router.post("/register", Controller.registerPost)

router.use(auth)

router.use("/employees", employeeRouter)
router.use("/products", productRouter)
router.use("/warehouses", warehouseRouter)

module.exports = router