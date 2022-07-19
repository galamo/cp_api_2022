require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { initDB } = require("./db/mysql")
const { getUsersHandler } = require("./users")
const axios = require("axios")

const app = express();
app.use(cors())
// initDB()

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

app.get("/countries-delay", async (req, res, next) => {
    try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all")
        setTimeout(() => {
            return res.json({ data })
        }, 4000);
    } catch (error) {
        return next(error)
    }
})

app.get("/countries", async (req, res, next) => {
    try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all")
        return res.json({ data })
    } catch (error) {
        return next(error)
    }
})
let delayName = 0
app.get("/countries-delay/name/:name", async (req, res, next) => {
    delayName++;

    try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${req.params.name}`)
        if (delayName % 2 === 0) {
            setTimeout(() => {
                return res.json({ data })
            }, 6000);
        } else {
            return res.json({ data })
        }
    } catch (error) {
        return next(error)
    }
})

app.get("/countries/code/:code", async (req, res, next) => {
    try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/alpha/${req.params.code}`)
        return res.json({ data })
    } catch (error) {
        return next(error)
    }
})


https://restcountries.com/v3.1/alpha/{code}


app.use((error, req, res, next) => {
    console.log(error)
    res.send("Something went wrong")
})

app.listen(process.env.PORT)