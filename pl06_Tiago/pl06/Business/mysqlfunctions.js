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
        console.log(object);
        var sql = "INSERT INTO resultado (FKHomeClub, FKAwayClub, Score) VALUES (?)";
        var convertedObject = [[object.NomeHome, object.NomeAway, object.Score]];

        con.query(sql, convertedObject, function (err, resultJogador) {
            if (err) {
                console.log(err);
            } else {
        
                console.log("Rows inserted: " + resultJogador.affectedRows);
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
        database: "nodepl06"
    });

    con.connect(function (err) {
        if (err) console.log(err);

        console.log("OK");

        var sql = "Select Nome, Id from jogador where Id = ?";
        con.query(sql, id, function (err, resultJogador) {
            console.log(resultJogador);

            if (err)
                callback(err);
            else {
                var object = require('../Models/Jogador.js');
                object.Id = resultJogador[0].Id;
                object.Name = resultJogador[0].Nome;
                callback(object);
            }
        });

    });

}



function ClubeDetails(id, callback) {
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

        var sql = "Select A.Nome from clube A where A.id = ?";
        con.query(sql, id, function (err, resultadoClube) {
            console.log(resultadoClube);

            if (err)
                callback(err);
            else {
                var sql = "Select B.Nome from jogador B where B.FkClube = ?";
                con.query(sql, id, function (err, resultJogador) {
                    console.log(resultJogador);

                    if (err)
                        callback(err);
                    else {
                        var object = require('../Models/Jogador.js');
                        object.Name = resultadoClube[0].Nome;
                        object.Jogadores = resultJogador;
                        callback(object);
                    }
                });
            }
        });

    });

}


function Classificacao(callback) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "nodepl06"
    });
  
    con.connect(function (err) {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log("OK");
  
        var sql = "SELECT count(*) from resultado r where r.FKHomeClub =  or r.FKAwayClub =";

        con.query(sql, function (err, resultados) {
          if (err) {
            console.log(err);
            callback(err);
          } else {
            console.log(resultados);
  
            var classificacao = resultados.map(function (resultado, index) {
              return {
                Posicao: index + 1,
                Nome: resultado.Nome,
                Pontuacao: resultado.Pontuacao
              };
            });
  
            callback(classificacao);
          }
        });
      }
    });
  }

module.exports = {
    NewGame,
    PlayerDetails,
    ClubeDetails,
    Classificacao,
   
}