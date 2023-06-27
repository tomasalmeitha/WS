var mysql = require('mysql'); 


function NewClub(object) {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl06",
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

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl06",
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

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl06",
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


function PlayerDetails(id, callback) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl06",
    });

    con.connect(function (err) {
        if (err){ 
            console.log(err);
            callback(err);
            return;
        }
        console.log("OK");

        var sql = "SELECT J.Id, J.NomeJogador, J.Clube FROM jogador J WHERE J.Id = ?";

        con.query(sql, id, function (err, result) {

            if (err){
                callback(err);
                return;
            }
            else {
                var object = require('../Models/Jogador.js');
                    object.Id = result[0].Id;
                    object.NomeJogador = result[0].NomeJogador;
                    object.Clube = result[0].Clube;
                    callback(object);
        }});
    })
};


function ClubDetails(id, callback) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl06",
    });

    con.connect(function (err) {
        if (err){ 
            console.log(err);
            callback(err);
            return;
        }
        console.log("OK");

        var sql = "SELECT J.NomeJogador, C.NomeClube FROM jogador J INNER JOIN clube C ON J.Clube = C.Id WHERE J.Id = ?";

        con.query(sql, id, function (err, result) {

            if (err){
                callback(err);
                return;
        }
            else {
                var object = require('../Models/Clube.js');
                    object.NomeClube = result[0].NomeClube;
                    object.NomeJogador = result[0].NomeJogador;
                    callback(object);
        }});
    })
};


function NumberGames(callback){
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

        var sql = "SELECT COUNT(resultado.Score) AS TotalJogos, clube.NomeClube FROM resultado JOIN clube ON resultado.HomeClub = clube.Id GROUP BY clube.NomeClube;";
         con.query(sql, function (err, batata) {
            if (err)
                callback(err);
            else {
          
                totalJogos = {...batata};
                console.log(totalJogos);

                callback(totalJogos);
            }
        });
    });
}

function allMatches(callback){
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

        var sql = "SELECT clube.NomeClube, SUM(CASE WHEN resultado.Score = '0' AND resultado.HomeClub = clube.Id THEN 1 WHEN resultado.Score = '1' AND resultado.AwayClub = clube.Id THEN 1 ELSE 0 END) AS Vitória, SUM(CASE WHEN resultado.Score = '1' AND resultado.HomeClub = clube.Id THEN 1 WHEN resultado.Score = '0' AND resultado.AwayClub = clube.Id THEN 1 ELSE 0 END) AS Derrota, SUM(CASE WHEN resultado.Score = 'x' AND (resultado.HomeClub = clube.Id OR resultado.AwayClub = clube.Id) THEN 1 ELSE 0 END) AS Empate FROM resultado JOIN clube ON clube.Id IN (resultado.HomeClub, resultado.AwayClub) GROUP BY clube.NomeClube;";
         con.query(sql, function (err, result) {
            if (err)
                callback(err);
            else {
          
                totalPoints = {...result};
                console.log(totalPoints);

                callback(totalPoints);
            }
        });
    });
}

function teamPoints(callback){
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

        var sql = "SELECT clube.NomeClube, SUM(CASE WHEN resultado.Score = '0' AND resultado.HomeClub = clube.Id THEN 3 WHEN resultado.Score = '1' AND resultado.AwayClub = clube.Id THEN 3 WHEN resultado.Score = 'x' AND (resultado.HomeClub = clube.Id OR resultado.AwayClub = clube.Id) THEN 1 ELSE 0 END) AS Pontos FROM resultado JOIN clube ON clube.Id IN (resultado.HomeClub, resultado.AwayClub) GROUP BY clube.NomeClube ORDER BY SUM(CASE WHEN resultado.Score = '0' AND resultado.HomeClub = clube.Id THEN 3 WHEN resultado.Score = '1' AND resultado.AwayClub = clube.Id THEN 3 WHEN resultado.Score = 'x' AND (resultado.HomeClub = clube.Id OR resultado.AwayClub = clube.Id) THEN 1 ELSE 0 END) DESC;";
         con.query(sql, function (err, result) {
            if (err)
                callback(err);
            else {
          
                totalPoints = {...result};
                console.log(totalPoints);

                callback(totalPoints);
            }
        });
    });
}





module.exports = {
    NewClub,
    NewPlayer,
    NewGame,
    PlayerDetails,
    ClubDetails,
    NumberGames,
    allMatches,
    teamPoints
    
}