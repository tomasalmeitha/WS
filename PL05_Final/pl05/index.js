var express = require('express');
var app = express();
var mysql = require('./Business/mysqlfunctions.js');

app.use(express.json());

app.post("/class/new", (req, res) => {
    res.send(mysql.NewClass(req.body));
});

app.post("/module/new", (req, res) => {
    res.send(mysql.NewModulo(req.body));
});

app.post("/avaliacao/new", (req, res) => {
    res.send(mysql.NewAvaliacao(req.body));
});

app.post("/student/new", (req, res) => {
    res.send(mysql.NewStudent(req.body));
});

app.get("/class/:id", (req, res) => {
    var id = req.params.id;

    mysql.ClassDetails(id, function (result) {
        console.log(result);
        res.json(result);
    });
});

app.get("/student/:id" , (req, res) => {
    var id = req.params.id;

    mysql.StudentDetails(id, function (result) {
        console.log(result);
        res.json(result);
    });
});

app.listen(3000);