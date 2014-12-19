// //Exercise: Double the input
// console.log("Enter a number");
// process.stdin.on("data",function(input){
// var newdata= function(x){
//   return x * 2;
// }
// console.log(newdata(input));
// });


// var WebSocketServer = require("ws").Server; // "ws" is object .Server is method.
// //var counter=0;
// var server = new WebSocketServer({port: 3000});
// server.on("connection", function(ws) {
//   //counter ++;//same as addEventListener.
//   console.log("Client connected!");
//   ws.send("You have connected to the server!");//ws.send this is going to show on client's page.
//   ws.on("message",function(message){  //ws.on is show on server. addeventlistener to the client and sending data to server;
//     var double=message*2;
//     var string=double.toString(); // number can't send back and forth btw server.
//     ws.send(string);
//   });
// });

var WebSocketServer = require("ws").Server;

var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  console.log("Client connected!");
  ws.send("You have connected to the server!");
  ws.on("message",function(message){
    var arr=message.toString().split(" ");
    var sum=parseInt(arr[0])+parseInt(arr[1]);
    ws.send(sum.toString());
    //console.log(sum);
  });
});
