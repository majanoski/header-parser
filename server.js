const net = require('net');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    const header = {
        ipaddress: req.headers["x-forwarded-for"],
        language: req.headers["accept-language"],
        software: req.headers["user-agent"].split('(')[1].split(')')[0]
    };
    res.send(header);
});

app.listen(process.env.PORT || '8080', function(){
    console.log('Started up on env port or 8080');
});
