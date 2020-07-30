const express = require("express")
const app = express()
const port = 3000
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'Warehouse-App-Simpan-Barang',
    resave: false,
    saveUninitialized: false,
}))

const routers = require("./routers")
app.use("/", routers)

app.listen(port, () => console.log(`App is listening at port: ${port}`))