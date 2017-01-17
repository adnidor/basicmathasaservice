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
    minuend = parseFloat(req.query.minuend)
    subtrahend = parseFloat(req.query.subtrahend)
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
    multiplier = parseFloat(req.query.multiplier)
    multiplicant = parseFloat(req.query.multiplicant)
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
    dividend = parseFloat(req.query.dividend)
    divisor = parseFloat(req.query.divisor)
    result = dividend / divisor
    response = {
        dividend:dividend,  
        divisor:divisor,
        result:result,
        status:"OK"
    }
    res.send(JSON.stringify(response));
})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Basicmathasaservice listening at http://%s:%s", host, port)
})
