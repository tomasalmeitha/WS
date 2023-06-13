
function NewClub(object) {
    var mysql = require('mysql'); 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl06"
    });

    con.connect(function (err) {
        if (err) console.log(err);

        console.log("OK");

        var sql = "INSERT INTO clube (Id, NomeClube) VALUES (?)";
        var convertedObject = [[object.Id, object.NomeClube]];
        con.query(sql, convertedObject, function (err, result) {
            if (err){
                console.log(err);
            } else {
                console.log("Rows inserted: " + result.affectedRows);
                return 'OK';
            }
        });
    });
}



function NewGame(object) {
    var mysql = require('mysql'); 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl06"
    });

    con.connect(function (err) {
        if (err) console.log(err);

        console.log("OK");

        var sql = "INSERT INTO resultado (Id, HomeClub, AwayClub, Score) VALUES (?)";
        var convertedObject = [[object.Id, object.HomeClub, object.AwayClub, object.Score]];
        con.query(sql, convertedObject, function (err, result) {
            if (err){
                console.log(err);
            } else {
                console.log("Rows inserted: " + result.affectedRows);
                return 'OK';
            }
        });
    });
}



function NewPlayer(object) {
    var mysql = require('mysql'); 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl06"
    });

    con.connect(function (err) {
        if (err) console.log(err);

        console.log("OK");

        var sql = "INSERT INTO jogador (Id, NomeJogador, Clube) VALUES (?)";
        var convertedObject = [[object.Id, object.NomeJogador, object.Clube]];
        con.query(sql, convertedObject, function (err, result) {
            if (err){
                console.log(err);
            } else {
                console.log("Rows inserted: " + result.affectedRows);
                return 'OK';
            }
        });
    });
}

function PlayerDetails(id, callback){
    var mysql = require('mysql'); 
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl05"
    });

    con.connect(function (err) {
        if (err) console.log(err);

        console.log("OK");

        var sql = "Select J.NomeJogador, C.NomeClube from jogador J Inner Join clube C on J.Clube = C.NomeClube where J.Id = ?";

        con.query(sql, id, function (err, result) {
            
            if (err) 
                callback(err);
            else{
                console.log(result);
                sql = "Select J.NomeJogador from jogador where clube = ?";
                con.query(sql, id, function (err, resultB) {
                    if (err) 
                        callback(err);
                    else{
                        var object = require('./Models/Clube.js');
                        object.Id = result[0].Id;
                        object.NomeClube = result[0].NomeClube;
                        object.Alunos = resultB;
                        callback(object);
                    }
                });
            }  
        });
    });
}




module.exports = {
    NewClub,
    NewGame,
    NewPlayer,
    PlayerDetails
};