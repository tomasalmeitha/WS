var express = require('express');
var app = express();
var mysql = require('./mysqlfunctions.js');

app.use(express.json());


app.post("/newclub", (req, res) => {
    res.send(mysql.NewClub(req.body));

})

app.post("/newgame", (req, res) => {
    res.send(mysql.NewGame(req.body));

})

app.post("/player/new", (req, res) => {
    res.send(mysql.NewPlayer(req.body));

})

app.get("/player/:id", (req, res) => {
    var id = req.params.id;
    mysql.PlayerDetails(id, function (result) {
        console.log(result);
        res.json(result);
    });
});




app.listen(3000);