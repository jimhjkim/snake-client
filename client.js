const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server, parce');
    conn.write('Name: ABC');
  });
  conn.on('data', (data) => {
    console.log('Message from server:', data);
  })

  return conn;
}
module.exports = { connect };