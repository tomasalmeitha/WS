const express = require('express');
const app = express();
const port = 4000;

// Middleware que adiciona a data atual à requisição
app.use((req, res, next) => {
  req.currentDate = new Date();
  next();
});

// Rota que retorna a data atual
app.get('/date', (req, res) => {
  res.type('text/plain').send(`A data atual é: ${req.currentDate}`);
});

// Middleware que pega na data atual e transforma no formato ISO 8601 DD-MM-YYYY
app.use((req, res, next) => {
  const currentDate = req.currentDate;
  const isoDate = currentDate.toISOString();
  req.currentDateISO = isoDate;
  next();
});

// Rota que retorna a data atual no formato ISO 8601 combinado com horas em UTC
app.get('/agora', (req, res) => {
  const currentDateISO = req.currentDateISO;
  res.status(200).type('text/plain').send(currentDateISO);
});

// Rota padrão
app.get('/', (req, res) => res.status(200).send('Sou uma aplicação Express!'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
