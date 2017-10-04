/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 8080;
app.set('port', port);
console.log("App running on port: "+port);
const server = http.createServer(app);
server.listen(port, () => console.log("Running"));
