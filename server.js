
const express = require('express')
const http = require('http')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const socketIO = require('socket.io')


const app = express()
var PORT = process.env.PORT || 5000

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/',express.static(path.join(__dirname,'public')))

const server = http.createServer(app)
const io = socketIO(server)

io.on('connection',user=>{
  console.log('a user connected');

  
  user.on("NEW_MESSAGE" , msg=>{
    io.emit('NEW_USER_MESSAGE',msg)
  })
})





server.listen(PORT, ()=>{
  console.log('server is running on port' ,PORT);
})