// console.log('\nindex.js\n')

const server = require('./api/server.js');

// server.greet();

// console.log(server.secret)

server.listen(5000, () => console.log('server on port 5k'));