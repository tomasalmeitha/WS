function NewClass(object) {
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
        console.log(object);
        var sql = "INSERT INTO turma (Description, StartDate, EndDate) VALUES (?)";
        var convertedObject = [[object.Nome, object.DataInicial, object.DataFinal]];

        con.query(sql, convertedObject, function (err, result) {
            if (err) {
                console.log(err);
            } else {
        
                console.log("Rows inserted: " + result.affectedRows);
                return 'OK';
            }
        });
    });
}

function NewStudent(object) {
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

        var sql = "INSERT INTO aluno (Name, BirthDate, Turma) VALUES (?)";
        var convertedObject = [[object.Name, object.BirthDate, object.Turma]];
        con.query(sql, convertedObject, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Rows inserted: " + result.affectedRows);
                return 'OK';
            }
        });
    });
}

function NewModulo(object) {
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

        var sql = "INSERT INTO modulo (Description) VALUES (?)";
        var convertedObject = [[object.Description]];
        con.query(sql, convertedObject, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Rows inserted: " + result.affectedRows);
                return 'OK';
            }
        });
    });
}

function NewAvaliacao(object) {
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

        var sql = "INSERT INTO avalicao (aluno, modulo, result) VALUES (?)";
        var convertedObject = [[object.Aluno, object.Modulo, object.Result]];
        con.query(sql, convertedObject, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Rows inserted: " + result.affectedRows);
                return 'OK';
            }
        });
    });
}

function ClassDetails(id, callback) {
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

        var sql = "Select Description, StartDate, EndDate from turma where id = ?";

        con.query(sql, id, function (err, result) {
            //var object = new Turma(result.Description, result.StartDate, result.EndDate);
            if (err)
                callback(err);
            else {


                console.log(result);
                sql = "Select Name, BirthDate from aluno where turma = ?";
                con.query(sql, id, function (err, resultB) {
                    if (err)
                        callback(err);
                    else {
                        var object = require('../Models/Turma.js');
                        object.Description = result[0].Description;
                        object.StartDate = result[0].StartDate;
                        object.EndDate = result[0].EndDate;
                        object.Alunos = resultB;
                        callback(object);
                    }

                });
            }

        });
    });
}

function StudentDetails(id, callback) {
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

        var sql = "Select A.Name, A.BirthDate, Avg(Av.Result) as Average from Aluno A Inner Join Avalicao Av on Av.Aluno = A.Id where A.id = ?";
        con.query(sql, id, function (err, result) {
            console.log(result);
            //var object = new Turma(result.Description, result.StartDate, result.EndDate);
            if (err)
                callback(err);
            else {
                sql = "Select M.Description, Av.Result from Avalicao Av Inner Join Modulo M on M.Id = Av.Modulo where Aluno = ?";

                con.query(sql, id, function (err, resultB) {
                    console.log(resultB);
                    if (err)
                        callback(err);
                    else {
                        var object = require('../Models/Aluno.js');
                        object.Name = result[0].Name;
                        object.BirthDate = result[0].BirthDate;
                        object.Average = result[0].Average
                        object.Avaliacoes = resultB;
                        callback(object);
                    }
                });
            }
        });

    });
}



module.exports = {
    NewClass,
    NewStudent,
    NewModulo,
    NewAvaliacao,
    ClassDetails,
    StudentDetails
}