const Server = require("ws").Server;

let s = new Server({ port: 5001 }, () => { 
    console.log("Server is listening on port 5001");
});

s.on("connection",(ws)=>{
    ws.on("message",(message)=>{
        console.log(`received: ${message}`)
        if (message == "hello") {
            ws.send("Hi from the server");
        }
    })
})