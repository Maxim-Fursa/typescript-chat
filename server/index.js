const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173/'
    }
})

const uri = 'mongodb+srv://admin:admin@cluster0.sikyrcf.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri)
    .then(() => server.listen(5174))
    .catch(err => console.error(err))



