const app = require('./server.js');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ mensagem: 'Rota Funcinando' });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
