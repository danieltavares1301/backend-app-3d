import app from './server.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ mensagem: 'Rota Funcinando' });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
