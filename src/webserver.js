const { default: axios } = require('axios')
const { setInterval } = require('timers')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve('src','public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src','public', 'index.htm'))
})

function wakeUp() {
    axios.get('https://onamibot.herokuapp.com')
}
wakeUp()

setInterval(()=> { wakeUp() },10*60000)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Servidor ligado`)
})