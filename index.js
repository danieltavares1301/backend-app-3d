const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ mensagem: 'Rota Funcinando' });
});

app.listen(8888, () => {
  console.log('Meu servidor está rodando...');
});
