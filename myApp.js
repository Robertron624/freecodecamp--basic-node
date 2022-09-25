let express = require('express');
let app = express();
const path = require('path')
require('dotenv').config()

console.log("Hello World")

app.use('/public',express.static( path.join(__dirname, '/public')))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, './views/index.html'))
})


app.get('/json', (req, res)=>{
    const caseStyle = process.env.MESSAGE_STYLE
    const message = caseStyle == 'uppercase'? 'HELLO JSON' : 'Hello json'
    res.json({
    "message": message
    })
})































 module.exports = app;
