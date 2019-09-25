/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const { INPUT }= require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', (data) => {
    handleUserInput(data, conn);
  })
  
  return stdin;
};
const handleUserInput = (data, conn) => {
  if (data === '\u0003') process.exit();
  conn.write(INPUT[data]);
  
  // switch(data) {
  //   case 'w':
  //     conn.write('Move: up');
  //     break;
  //   case 'a':
  //     conn.write('Move: left');
  //     break;
  //   case 'd':
  //     conn.write('Move: right');
  //     break;
  //   case 's':
  //     conn.write('Move: down');
  //     break;
    // case '\u0003': //-> \u0003 maps to ctrl+c input
    //   console.log('Thanks for using me, ciao!');
    //   process.exit();
    //   break;
    // case 'p':
    //   conn.write('Say: puta');
    //   break;
    // case 'u':
    //   conn.write('Say: u suck');
    //   break;
  // }
};
module.exports = { setupInput };