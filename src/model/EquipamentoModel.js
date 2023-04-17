import mongoose from 'mongoose';

const equipamentoSchema = new mongoose.Schema(
  {
    name: { type: String },
    url: { type: String },
    tag: { type: String },
    item: { type: String },
    localidade: { type: String, default: 'São Luís - MA' },
    dataEntrada: { type: String },
    dataSaida: { type: String },
    servicosRestantes: { type: String },
    pecas: [{ namePeca: { type: String }, quantidadePeca: { type: Number } }],
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'user' },
    relatorioDesmontagemId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'relatorioDesmontagem',
    },
  },
  {
    timestamps: true, // ele cria automaticamente a data de atualização e a data de modificação
  },
);
const EquipamentoModel = mongoose.model('equipamento', equipamentoSchema);

export default EquipamentoModel;
