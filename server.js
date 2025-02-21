const express = require("express")
const app = express()

const http =  require('http')
const {Server} = require("socket.io")

const server =  http.createServer(app);

const io =  new Server(server);

io.on('connection', (socket) =>{
      console.log('socket connected', socket.id)
})

const PORT =  process.env.PORT ||  5000

app.listen(PORT , (req,res)=>{
        console.log("server is running in port no : 5000")
    // req.send("server is runnig");
})
