var mysql = require('mysql')
const express = require('express');
const app = express();
const port = 4000;


var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    /* database: "empresa-ohyes" */
});

app.use((req, res, next) => {
    conn.connect(function(err) {
        if(err) throw err;
        console.log('Connected to mySQL!');
        next();
})
})

app.get('/', (req, res) => {
        conn.query("SELECT * FROM `empresa-ohyes`.empregado", function(err, result, fields){
            if(err) throw err;
            console.log(result);
            res.send(result);
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
