var mysql = require('mysql');


function NewArtigoStock(object, callback) {

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "nodepl07",
    });
  
    con.connect(function (err) {
      if (err) { 
        console.log(err);
        callback(err);
        return;
      }
  
      console.log("Connected!");
  
      // Insert artigo
      var artigoSql = "INSERT INTO artigo (Descricao, Valor) VALUES (?)";

      var artigoValues = [[object.Descricao, object.Valor]];
  
      con.query(artigoSql, artigoValues, function (err, artigoResult) {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          console.log("Artigo inserted." +artigoResult);
  
          // Insert stock
          var stockSql =
            "INSERT INTO stock (ArtigoId, ArmazemId, Unidades) VALUES (?)";
          var stockValues = [[artigoResult.insertId, object.ArmazemId, object.Unidades]];
  
          con.query(stockSql, stockValues, function (err, stockResult) {
            if (err) {
              console.log(err);
              callback(err);
            } else {
              console.log("Stock inserted." +stockResult);
              callback("OK");
            }
          });
        }
      });
    });
  }


  function NewArmazem(object, callback){

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
  

module.exports = {
    NewArtigoStock,
    NewArmazem
    
}