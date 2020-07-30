const express = require("express")
const router = express.Router()

const EmployeeController = require("../controllers/EmployeeController")

// Read
router.get("/", EmployeeController.show)

// Create
router.get("/add", EmployeeController.addGet)
router.post("/add", EmployeeController.addPost)

// Update
router.get("/:id/edit", EmployeeController.editGet)
router.post("/:id/edit", EmployeeController.editPost)

// Delete
router.get("/:id/delete", EmployeeController.delete)

module.exports = router