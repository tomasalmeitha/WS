var express = require("express");
var app = express();
var mysql = require('./mySQLFunctions')

app.use(express.json());



// Rota que insere novas turmas
app.post('/class/new', (req, res) => {
    res.send(mysql.NewClass(req.body));
    });


  // Rota que insere novos alunos
  app.post('/student/new', (req, res) => {
    res.send(mysql.NewStudent(req.body));
  });

  // Rota para retornar a descrição da turma e seus alunos
  app.get('/class/:id', (req, res) => {
    var id = req.params.id;
    mysql.turmaDetails(id, function (result) {
        res.json(result);
    });
  });
  
  // Rota para retornar os dados do aluno, média atual e avaliações disponíveis
  app.get('/student/:id', (req, res) => {
    var className = req.params.id;
    mysql.studentDetails(className, function (result) {
        res.json(result);
    });
  });


  app.listen(3000, () => {
    console.log("Server is running on port 3000");
});