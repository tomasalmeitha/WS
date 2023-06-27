
function NewArmazem(object, callback){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geladosglobo"
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


function NewIceCream(object, callback){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geladosglobo"
    });

    con.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected");

        var sql = "Insert into gelado (Descricao, Valor) values (?)";
        var convertedObject = [[object.Descricao, object.Valor]];

        con.query(sql, convertedObject, function (err, result) {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log(result);
                sql = "Insert into stock (GeladoId, ArmazemId, UnidadesInicial) Values (?)";
                convertedObject = [[result.insertId, object.ArmazemId, object.UnidadesInicial]];
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


function Sell(object, callback){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geladosglobo"
    });

    con.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected");

        var sql = "Insert into venda (GeladoId, Quantidade, DataVenda) values (?)";
        var convertedObject = [[object.GeladoId, object.Quantidade, object.DataVenda]];

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
        database: "geladosglobo"
    });

    con.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected");

        var sql= "SELECT g.descricao, (s.UnidadesInicial - IFNULL(SUM(v.Quantidade),0)) AS StockAtual, ((s.UnidadesInicial - IFNULL(SUM(v.Quantidade),0))*g.Valor) AS ValorTotalStock FROM stock s LEFT JOIN venda v ON v.GeladoId = s.GeladoId Inner Join gelado g on g.Id = s.GeladoId WHERE s.ArmazemId = ? GROUP BY s.GeladoId;"
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


function GetTopSell(callback){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "geladosglobo"
    });

    con.connect(function (err) {
        if (err) console.log(err);
        console.log("Connected");
        
        var sql = "SELECT g.Descricao as Nome, (IFNULL(sum(v.Quantidade),0)) AS NumeroVendas FROM gelado g LEFT JOIN venda v ON v.GeladoId = g.Id GROUP BY g.Id ORDER BY NumeroVendas desc limit 5";
        con.query(sql, function (err, result) {
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
   NewArmazem, NewIceCream, Sell, GetArmazem, GetTopSell
}