let server = require('http').createServer()

const io = require('socket.io')(server, {
  path: '/'
})

io.on('connection', (socket) => {
  console.log(socket.conn.remoteAddress, 'connected')
  socket.on('disconnect', (reason) => {
    console.log(socket.conn.remoteAddress, 'disconnect, reason:', reason)
  })
})

server.listen(8081)
console.log('socket.io listen on 8081')
