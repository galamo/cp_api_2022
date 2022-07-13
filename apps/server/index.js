require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { initDB } = require("./db/mysql")
const { getUsersHandler } = require("./users")


const app = express();
app.use(cors())
initDB()

app.use((req, res, next) => {
    next()
})

app.get("/health-check", (req, res, next) => {
    res.json({ message: "api is ready" })
})
app.get("/users", async (req, res, next) => {
    try {
        const result = await getUsersHandler();
        return res.json({ result })
    } catch (error) {
        return next(error)
    }
})

app.use((error, req, res, next) => {
    console.log(error)
    res.send("Something went wrong")
})

app.listen(process.env.PORT)