var express = require('express');
var app = express();
app.use(express.json()); 

var mysql = require("./mysqlfunctions");



app.post("/warehouse/new", (req, res) => {
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



app.post("/icecream/add", (req, res) => {
    /*
        {
            "Descricao": "Conegel",
            "Valor": 2.15,
            "ArmazemId": 1,
            "Unidades": 150
}
  
    */
    mysql.NewIceCream(req.body, function (result) {
        console.log(result);
        res.json(result);
    });
  });



  app.post("/venda", (req, res) => {
    /*
        {
            "ArtigoId": 1,
            "Quantidade": 10,
            "DataVenda": 2023/06/22
        }

    */
    mysql.Sell(req.body, function (result) {
        console.log(result);
        res.json(result);
    });
});



app.get("/armazem/:id", (req, res) => {
    var id = req.params.id;

    mysql.GetArmazem(id, function (result) {
        console.log(result);
        res.json(result);
    });
});



app.get("/topsell", (req, res) => {

    mysql.GetTopSell(function (result) {
        console.log(result);
        res.json(result);
    });
});




app.listen(3000, () => {
    console.log("App is listening on port 3000");
  });
  