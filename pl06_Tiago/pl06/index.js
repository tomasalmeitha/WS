var express = require('express');
var app = express();
var mysql = require('./Business/mysqlfunctions.js');

app.use(express.json());

app.post("/newgame", (req, res) => {
    res.send(mysql.NewGame(req.body));
});

app.get("/player/:id", (req, res) => {
    var id = req.params.id; 

    mysql.PlayerDetails(id, function (result) {
        console.log(result);
        res.json(result);
    });
});


app.get("/club/:id", (req, res) => {
    var id = req.params.id; 

    mysql.ClubeDetails(id, function (result) {
        console.log(result);
        res.json(result);
    });
});


app.get("/classification/", (req, res) => {


    mysql.Classificacao(function (result) {
        console.log(result);
        res.json(result);
    });
});

  

app.listen(3000);


