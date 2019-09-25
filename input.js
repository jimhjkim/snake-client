/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', (data) => {
    handleUserInput(data);
  })
  
  return stdin;
};
const handleUserInput = (data) => {
  if (data === '\u0003') { //-> \u0003 maps to ctrl+c input
  console.log('Thanks for using me, ciao!');
  process.exit();
  }
};
module.exports = { setupInput };