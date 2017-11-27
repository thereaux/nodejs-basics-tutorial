//Dan Taro's Notes and I am the best
/*
JS is used to make more interactive webpages, it's used in browsers
The engine to react and run the code is run in Chrome in V8 engine,
it transfers JS in to machine code and compiles it faster

We make logic in JS and run it node JS
We can make servers in node JS

Node JS is good becuase it's javascript code and it's good for front end tasks
Stay in one language.
It is asycronous in nature.

It doesn't handle single data intensive requests
It's good with multiple clients

It's constantly in development

COMMANDS
node -v //give the version



MAKING A SERVER
import or require  is basic java javascript
to run the program write "node server.js" then it starts it
in the browser,
go to localhost:8000 to open the app!
*/
var http = require('http');

//tells the port to listen to requests
function onRequest(request, response) {
  //sets the content type of the response and the key of the header
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //prints text
    response.write('Hello World');
    //ends the program
    response.end();
}

http.createServer(onRequest).listen(8000);
