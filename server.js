const path = require('path')
const http = require("http")
const fs = require("fs")
// const mime = require('mime');
const express = require("express")

const app = express(); 
const port = 3000

    // return file to client
    fs.readFile(url, (error, data) => {
        if(error){
            res.writeHead(404);
            res.write("File Not Found");
        } else {
            res.write(data);
        }
        res.end();
    });
});


server.listen(port, function(error){
    if(error){
        console.log("Something went wrong", error)
    } else{
        console.log("Server is listening on port " + port)
    }

})


