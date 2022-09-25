let express = require('express');
let app = express();
const path = require('path')
require('dotenv').config()

console.log("Hello World")

app.use('/public',express.static( path.join(__dirname, '/public')))

app.use((req, res, next) => {
    const method = req.method
    const path = req.path
    const ip = req.ip
    console.log(`${method} ${path} - ${ip}`)

    next()
}) 

app.get('/now', (req, res, next)=>{
    req.time = new Date().toString()
    next()
},
    (req, res)=>{
        res.send({
            time: req.time
        })
    }
)

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get("/:word/echo", (req, res)=>{
    let word = req.params.word
    res.send({
        echo:word
    })
})

app.route('/name')
.get((req, res)=>{
    let name = req.query.first
    let lastname = req.query.last
    res.send({
        name: `${name} ${lastname}`
    })
})
.post()


app.get('/json', (req, res)=>{
    let mensaje
    if(process.env.MESSAGE_STYLE == 'uppercase')
        mensaje = 'Hello json'.toUpperCase()
    else
        mensaje = 'Hello json'

    res.json({
    "message": mensaje
    })
})































 module.exports = app;
