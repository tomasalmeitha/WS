
function NewClass(object) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl05"
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        var sql = "INSERT INTO turma (Description, StartDate, EndDate) VALUES (?)";
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
        if (err) throw err;
        console.log("Connected!");

        var sql = "INSERT INTO aluno (Name, BirthDate, FkTurma) VALUES (?)";
        var convertedObject = [[object.Name, object.BirthDate, object.FkTurma]];
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

function turmaDetails(id, callback) {

    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl05"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        con.query("SELECT * FROM turma WHERE id = ?", id, 
        function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    });
}


function studentDetails(className, callback) {

    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodepl05"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        con.query("SELECT * FROM aluno WHERE class = ?", className, function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    });
}



module.exports = {
    NewClass,
    NewStudent,
    turmaDetails,
    studentDetails
}

