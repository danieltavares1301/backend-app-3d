const mongoose = require('mongoose');

const relatorioDesmontagemSchema = new mongoose.Schema(
  {
    name: { type: String },
    selectedCheckBox1: { type: String },
    selectedCheckBox2: { type: String },
    selectedCheckBox3: { type: String },
    selectedCheckBox4: { type: String },
    selectedCheckBox5: { type: String },
    selectedCheckBox6: { type: String },
    executantes: { type: String },
    selectedCheckBox8: { type: String },
    selectedCheckBox9: { type: String },
    selectedCheckBox10: { type: String },
    selectedCheckBox11: { type: String },
    selectedCheckBox12: { type: String },
    selectedCheckBox13: { type: String },
    selectedCheckBox14: { type: String },
    selectedCheckBox15: { type: String },
    TAG: { type: String },
    codEstoque: { type: String },
    fabricante: { type: String },
    woPedido: { type: String },
    modelo: { type: String },
    dataDesmontagem: { type: String },
    inspetorCQ: { type: String },
    codRastreio: { type: String },
    emergencia: { type: String },
    planejado: { type: String },
    falhas: { type: String },
    dataInicio: { type: String },
    dataTermino: { type: String },
    equipamentoId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'equipamento',
    },
    fotos: [{ type: String }],
  },
  {
    timestamps: true, // ele cria automaticamente a data de atualização e a data de modificação
  },
);
const RelatorioDesmontagemModel = mongoose.model(
  'relatorioDesmontagem',
  relatorioDesmontagemSchema,
);

module.exports = RelatorioDesmontagemModel;
