const http = require('node:http');
const fs  = require('fs')

// const fileContent  = fs.readFileSync('form.html')
const port = 80;



const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Form Submitted');
});



server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});