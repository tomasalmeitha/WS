
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

        var sql = "INSERT INTO turma (Description, StartDate, EndDate ) VALUES (?)";
        var convertedObject = [[object.Description, object.StartDate, object.EndDate]];
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

        var sql = "INSERT INTO aluno (Name, BirthDate, turma ) VALUES (?)";
        var convertedObject = [[object.Name, object.BirthDate, object.turma]];
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


function ClassDetails(id, callback){
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
            /* var object = result;
            var object = new Turma(result[0].Description, result[0].StartDate, result[0].EndDate); */
            if (err) 
                callback(err);
            else{
                console.log(result);
                sql = "Select Name, BirthDate from aluno where turma = ?";
                con.query(sql, id, function (err, resultB) {
                    if (err) 
                        callback(err);
                    else{
                        var object = require('./Models/Turma.js');
                        object.Description = result[0].Description;
                        object.StartDate = result[0].Description;
                        object.EndDate = result[0].Description;
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

        var sql = "SELECT * FROM aluno WHERE id = ?";
        con.query(sql, id, function (err, result) {
            if (err)
                callback(err);
            else {
                var student = result[0];
                var studentDetails = {
                    id: student.Id,
                    name: student.Name,
                    birthDate: student.BirthDate,
                };

                sql = "SELECT AVG(Result) AS currentAverage FROM avaliacao WHERE fkAluno = ?";
                con.query(sql, id, function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        studentDetails.currentAverage = result[0].currentAverage;

                        sql = "SELECT * FROM avaliacao WHERE fkAluno = ?";
                        con.query(sql, id, function (err, result) {
                            if (err) {
                                callback(err);
                            } else {
                                studentDetails.availableEvaluations = result;
                                callback(studentDetails);
                            }
                        });
                    }
                });
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

        var sql = "INSERT INTO avaliacao (Id, fkAluno, fkModulo, Result) VALUES (?)";
        var convertedObject = [[object.Id, object.fkAluno, object.fkModulo, object.Result]];
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



module.exports = {
    NewClass,
    NewStudent,
    ClassDetails,
    NewAvaliacao,
    NewModulo,
    StudentDetails
};


