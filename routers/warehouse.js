const express = require("express")
const router = express.Router()

const WarehouseController = require("../controllers/WarehouseController")

// Read
router.get("/", WarehouseController.show)

// Create
router.get("/add", WarehouseController.addGet)
router.post("/add", WarehouseController.addPost)

// Update
router.get("/:id/edit", WarehouseController.editGet)
router.post("/:id/edit", WarehouseController.editPost)

// Delete
router.get("/:id/delete", WarehouseController.delete)

module.exports = router