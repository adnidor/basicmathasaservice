var express = require('express');
var app = express();

app.get('/', function (req, res) {
})

app.get('/add*', function (req, res) {
   res.send('Add');
})

app.get('/subtract*', function (req, res) {
   res.send('Subtract');
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
