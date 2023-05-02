const express = require('express');
const dotenv = require('dotenv');
const RelatorioDesmontagemRouter = require('./router/RelatorioDesmontagemRouter.js');
const UserRouter = require('./router/UserRouter.js');
const EquipamentoRouter = require('./router/EquipamentoRouter.js');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const PORT = process.env.PORT;

const app = express();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose
  .connect(DATABASE_URL)
  .then(() => console.log('Database Connected...'))
  .catch(error =>
    console.error('Error to connected to database: ' + error.message),
  );

app.use(express.json());

app.use(cors());

//app.use(helmet());

app.use(RelatorioDesmontagemRouter);
app.use(UserRouter);
app.use(EquipamentoRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
