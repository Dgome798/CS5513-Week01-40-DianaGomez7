

let myimg = require('img');


let myserver = myhttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let mytext;
    if ( myrequest.url === "/hey" ) {
      mytext = "Well hello there folks...";
    } else {
      mytext = "Hi how are you?";
    }
  
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( mytext );
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("server has started");
