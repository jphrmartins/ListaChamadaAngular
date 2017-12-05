var express = require('express');
var session = require('cookie-session'); // Loads the piece of middleware for sessions
var bodyParser = require('body-parser'); // Loads the piece of middleware for managing the settings
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

/* List of tasks */
var listaChamada = listaChamada || [{ id: 1, nomeAluno: 'Homem de ferro', quantidaDePresenca: 0 ,presente:false }];

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* The to do list and the form are displayed */
app.get('/listaChamada', function(req, res) {
    res.json(listaChamada);
});

/* Adding an item to the to do list */
app.post('/listaChamada/add/', function(req, res) {
    if (req.body != '' || req.body != undefined) {
        req.body.id = listaChamada === undefined ? 1 : listaChamada[listaChamada.length - 1].id + 1;
        listaChamada.push(req.body);
    }

    res.send('Incluido com sucesso!');
});

/* Update an item from the to do list */
app.put('/listaChamada/update', function(req, res) {

    var task = req.body;

    Object.assign(listaChamada, listaChamada.map(el => el.id == task.id ? task : el))

    res.send('Alterado com sucesso!');
});

/* Deletes an item from the to do list */
app.delete('/listaChamada/delete/:id', function(req, res) {
    if (req.params.id != '') {
        listaChamada = listaChamada.filter(f => f.id != req.params.id);
    }

    res.send('Excluido com sucesso');
})

.listen(8083, function() {
    console.log('Server is running. Point your browser to: http://localhost:8083');
});