let server = require('http').createServer()

const io = require('socket.io')(server, {
  path: '/'
})

server.listen(8081)
console.log('socket.io listen on 8081')
