const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 8080
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server, parce');
    conn.write('Name: ABC');
    console.log('you ded cuz you idled')
  });
  
  return conn;
}
module.exports = { connect };