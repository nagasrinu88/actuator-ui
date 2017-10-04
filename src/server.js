/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(__dirname + '/dist'));
app.listen(process.env.port || 8080);
app.get('/**', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log("Node server started");


