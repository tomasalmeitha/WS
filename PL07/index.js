var express = require('express');
var app = express();
var mysql = require('./mysqlfunctions.js');

app.use(express.json());


//Tínhamos de criar um armazém primeiro só depois é que fazemos o POST do artigo/stock
app.post("/armazem/new", (req, res) => {
  /*
      {
          "Nome": "Armazem 01",
          "Localidade": "Valongo"
      }

  */
  mysql.NewArmazem(req.body, function (result) {
      console.log(result);
      res.json(result);
  });
});



app.post("/artigo/new", (req, res) => {
  /*
      {
          "Descricao": "Caneta BIC",
          "Valor": 2.15
          "ArmazemId": 1,
          "Unidades": 300
      }

  */
  mysql.NewArtigoStock(req.body, function (result) {
      console.log(result);
      res.json(result);
  });
});



  
    

app.listen(3000, () => {
    console.log("App is listening on port 3000");
  });
  