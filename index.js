const express = require("express")
require("dotenv").config()
require("./connections/db")
const bitlyRoutes = require('./src/routes/index')

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/bitly', bitlyRoutes)

app.get('/', async(req,res) => {
    res.send("Hello WOrld")
})

app.listen(PORT, () => {
    console.log(`Server Connected on http://localhost:${PORT}/bitly`);
})

