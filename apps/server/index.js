require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { initDB } = require("./db/mysql")
const { getUsersHandler } = require("./users")
var jwt = require('jsonwebtoken');
const axios = require("axios")
const bodyParser = require("body-parser")
NODE_TLS_REJECT_UNAUTHORIZED = 0


const app = express();
app.use(cors())
// initDB()

app.use((req, res, next) => {
    next()
})
app.use(bodyParser.json())

app.get("/health-check", (req, res, next) => {
    res.json({ message: "Api v2 is ready" })
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
let authUsers = [{ userName: "master", password: "master" }]
app.post("/auth/register", async (req, res, next) => {
    try {
        const { userName, password } = req.body
        console.log("register", userName, password)
        if (!userName || !password) return res.status(400).send()
        const foundOne = authUsers.findIndex(u => u.userName === userName)
        console.log(foundOne)
        if (foundOne >= 0) return res.status(400).json({ message: `${userName} user already exist` })
        authUsers.push({ userName, password })
        return res.json({ message: "Registered!" })
    } catch (error) {
        return next(error)
    }
})

app.post("/auth/login", async (req, res, next) => {
    try {
        console.log("login")
        const { userName, password } = req.body
        if (!userName || !password) return res.status(400).send()
        const user = authUsers.find(u => u.userName === userName && u.password === password)
        console.log(user, authUsers)
        if (user) {
            const token = jwt.sign({ userName, role: "viewer" }, 'token', { expiresIn: "1h" });
            return res.json({ token })
        } else {
            return res.status(401).json({ message: "Unauthorized!" })
        }
    } catch (error) {
        return next(error)
    }
})

app.get("/secure", async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers.authorization
    try {
        console.log("secure")
        jwt.verify(token, 'token', function (err, decoded) {
            if (err) {
                return res.status(401).json({ message: "Unauthorized!" })
            } else {
                return res.json({ secureMessage: "Leader in Cyber Security Solutions" })
            }
        });
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