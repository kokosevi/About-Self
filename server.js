const path = require('path');
const http = require("http");
const fs = require("fs");
const express = require("express")
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    console.log("HERE");
    res.render("index", {})

});

app.listen(3000);
























// // const mime = require('mime');
// //const express = require("express")

// //const app = express(); 
// const port = 3000;

// const server = http.createServer((req, res) => {
//     // for '/' get index.html otherwise strip initial slash character from file path
//     const url = req.url === "/" ? "index.html" : req.url.substring(1); 

//     // prepare content type depending on file extension
//     const ext = url.split(".")[1].toLowerCase();
//     let contentType = "text/html";
//     switch (ext){
//         case "css":
//             contentType = "text/css";
//             break;
//     }

//     // create resonse headers
//     res.writeHead(200, { "Content-Type": contentType });

//     // return file to client
//     fs.readFile(url, (error, data) => {
//         if(error){
//             res.writeHead(404);
//             res.write("File Not Found");
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// });


// server.listen(port, error => {
//     if(error){
//         console.log("Something went wrong", error)
//     } else{
//         console.log("Server is listening on port " + port)
//     }
// });
