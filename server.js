var PORT = 31336;
var HOST = '0.0.0.0';

var dgram = require("dgram");
var serverUDP = dgram.createSocket("udp4");

var active = '1'
var lastMessage = ''

var map = [5,4,1,2,3];
function setActiveFromMessage(message)
{
  lastMessage = message
  var arr = Array.prototype.slice.call(message, 0)
  for(var i = 0; i<arr.length; i++) {
    if(arr[i] > 0) {
      active = map[i].toString();
    }
  }
  console.log(active);
}

console.log("script running")

serverUDP.on('listening', function () {
    var address = serverUDP.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

serverUDP.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
    setActiveFromMessage(message);
});

serverUDP.bind(PORT, HOST);
const express = require('express')
const app = express()
const port = 3000
app.get('/data', (req, res) => res.send(active))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// Include it and extract some methods for convenience
// const serverHttp = require('server');
// const { get, post } = serverHttp.router;
//
// // Launch server with options and a couple of routes
// serverHttp({ port: 8080 }, [
//   get('/', ctx => {
//     console.log(active);
//     return active;
//   }),
//   get('/simulate.html', )
//   post('/', ctx => console.log(ctx.data))
// ]);
