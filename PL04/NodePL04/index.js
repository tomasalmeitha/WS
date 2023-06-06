var express = require("express");
var app = express();


app.use(express.json());


app.get("/isalive", (req, res) => {

    IsAlive();
    res.send("I'm alive!! :)");
});


app.post("/insert", (req, res) => {

    var values = [
        ['Tiago Borges', '1994-05-23', 'A'],
        ['Filipe Cunha', '1995-02-02', 'B'],
        ['Gaspar Borges', '2002-03-01', 'B'],
        ['Hélder Almeida', '1996-03-08', 'B'],
        ['José Teixeira', '2000-09-01', 'A'],
    ];
    InsertInto(values);
    res.send("OK");
});


app.get("/details/:id", (req, res) => {

    var id = req.params.id;
    Details(id, function (result) {
        res.json(result);
    });
});


app.get("/list", (req, res) => {

    var className = req.query.class;
    ListStudents(className, function (result) {
        res.json(result);
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


//#region MySql Functions
function IsAlive() {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "NodePL04"
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
}


function Details(id) {

    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "NodePL04"
    });

    con.connect(function (err) {

        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM aluno WHERE id = ? LIMIT 1", id, function (err, result) {

            if (err) throw err;
            console.log(result);
        });
    });
}

function InsertInto(values) {

    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "NodePL04"
    });

    con.connect(function (err) {

        if (err) console.log(err);
        console.log("Connected!");
        var sql = "INSERT INTO aluno (Name, BirthDate, Class) VALUES ?";

        con.query(sql, [values], function (err, result) {
            if (err){
                console.log(err);
            } else {
            console.log("Rows inserted: " + result.affectedRows);
            }
        });
    });
}

function ListStudents(className, callback) {

    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "NodePL04"
    });
    con.connect(function (err) {

        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM aluno WHERE class = ?", className, function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    });
}
//#endregion MySql Functions

axios();

async function axios() {

    var axios = require("axios");
    var res = await axios.post("http://localhost:3000/insert");
    console.log(res.data);
}
