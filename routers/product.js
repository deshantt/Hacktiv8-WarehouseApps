const express = require("express")
const router = express.Router()

const ProductController = require("../controllers/ProductController")

// Read
router.get("/", ProductController.show)

// Create
router.get("/add", ProductController.addGet)
router.post("/add", ProductController.addPost)

// Update
router.get("/:id/edit", ProductController.editGet)
router.post("/:id/edit", ProductController.editPost)

// Delete
router.get("/:id/delete", ProductController.delete)

module.exports = router