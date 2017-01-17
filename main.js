var express = require('express');
var app = express();

app.get('/', function (req, res) {
})

app.get('/add*', function (req, res) {
    augend = parseFloat(req.query.augend)
    addend = parseFloat(req.query.addend)
    result = augend + addend
    response = {
        augend:augend,  
        addend:addend,
        result:result,
        status:"OK"
    }
    res.send(JSON.stringify(response));
})

app.get('/subtract*', function (req, res) {
    minuend = req.query.minuend
    subtrahend = req.query.subtrahend
    result = minuend - subtrahend
    response = {
        minuend:minuend,  
        subtrahend:subtrahend,
        result:result,
        status:"OK"
    }
    res.send(JSON.stringify(response));
})

app.get('/multiply*', function (req, res) {
    multiplier = req.query.multiplier
    multiplicant = req.query.multiplicant
    result = multiplier * multiplicant
    response = {
        multiplier:multiplier,  
        multiplicant:multiplicant,
        result:result,
        status:"OK"
    }
    res.send(JSON.stringify(response));
})

app.get('/divide*', function (req, res) {
   res.send('Divide');
})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
