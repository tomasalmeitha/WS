// a. Artigo (Id, Descricao, Valor) 
// b. Armazem (Id, Nome, Localidade) 
// c. Stock (Id, ArtigoId, ArmazemId, Unidades) 
// d. Venda (Id, Artigo, Quantidade, DataVenda)

function NewArtigo(object, callback){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl07"
    });

    con.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected");

        var sql = "Insert into artigo (Descricao, Valor) values (?)";
        var convertedObject = [[object.Descricao, object.Valor]];

        con.query(sql, convertedObject, function (err, result) {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log(result);
                sql = "Insert into Stock (Artigo, Armazem, Unidades) Values (?)";
                convertedObject = [[result.insertId, object.ArmazemId, object.Unidades]];
                con.query(sql, convertedObject, function (err, result) {
                    if (err) {
                        console.log(err);
                        callback(err);
                    } else {
                        console.log("Rows inserted: " + result);
                        callback('OK');
                    }
                });
            }
        });
    })
}

function NewArmazem(object, callback){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl07"
    });

    con.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected");

        var sql = "Insert into armazem (Nome, Localidade) values (?)";
        var convertedObject = [[object.Nome, object.Localidade]];

        con.query(sql, convertedObject, function (err, result) {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log("Rows inserted: " + result);
                callback('OK');
            }
        });
    });
}

function Sell(object, callback){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl07"
    });

    con.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected");

        var sql = "Insert into Venda (Artigo, Quantidade, DataVenda) values (?)";
        var convertedObject = [[object.ArtigoId, object.Quantidade, object.DataVenda]];

        con.query(sql, convertedObject, function (err, result) {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log("Rows inserted: " + result);
                callback('OK');
            }
        });
    });
}

function GetArmazem(id, callback){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl07"
    });

    con.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected");

        var sql= "SELECT a.Descricao, (s.Unidades - IFNULL(SUM(v.Quantidade),0)) AS StockAtual FROM stock s LEFT JOIN venda v ON v.Artigo = s.Artigo Inner Join artigo a on a.Id = s.Artigo WHERE s.Armazem = ? GROUP BY s.Artigo;"
        con.query(sql, id, function (err, result) {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log("Rows inserted: " + result);
                callback(result);
            }
        });
    });
}

module.exports = {
    NewArtigo, NewArmazem, Sell, GetArmazem
}