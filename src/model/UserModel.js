const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    contato: { type: String },
    role: { type: String },
  },
  {
    timestamps: true, // ele cria automaticamente a data de atualização e a data de modificação
  },
);
const UserModel = mongoose.model('user', userSchema);

export default UserModel;
