var http - require('http');
// anything that we want loaded we will require 

http.createServer(function (request, responce){



	responce.writeHead(200, {'Content-Type': 'text/plain});
	responce.write('asdsad');
	responce.end('Hello World\n');
}).listen(8124);

console.log('Server running ');
