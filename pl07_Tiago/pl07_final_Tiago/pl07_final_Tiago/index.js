var express = require('express'); //Adicionar modulo express
var app = express(); //Inicializar modulo
app.use(express.json()); //Todos os pedidos (body) serão em json ou transformado

var mySql = require("./Business/SqlFunctions");



app.post("/armazem/new", (req, res) => {
    /*
        {
            "Nome": "Armazem 01",
            "Localidade": "Valongo"
        }

    */
    mySql.NewArmazem(req.body, function (result) {
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
    mySql.NewArtigo(req.body, function (result) {
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
    mySql.Sell(req.body, function (result) {
        console.log(result);
        res.json(result);
    });
});

app.get("/armazem/:id", (req, res) => {
    var id = req.params.id;

    mySql.GetArmazem(id, function (result) {
        console.log(result);
        res.json(result);
    });
});

app.listen(3000);