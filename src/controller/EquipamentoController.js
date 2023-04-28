const EquipamentoModel = require('../model/EquipamentoModel.js');
const dotenv = require('dotenv');

dotenv.config();

// toda a lógica que busca as informações no Model e devolve uma resposta ao usuário
class EquipamentoController {
  //retorna 1 dado
  async getOne(request, response) {}

  //retorna todos
  async index(request, response) {
    try {
      // agendamentos ordenados primeiramente em data e depois em horário
      const equipamentos = await EquipamentoModel.find();
      response.status(200).send(equipamentos);
    } catch (error) {
      response.status(404).json({ message: 'Request failed!' });
    }
  }

  async remove(request, response) {}

  //POST
  async store(request, response) {
    try {
      const equipamento = await EquipamentoModel.create(request.body);

      response.status(201).json({
        message: 'equipamento successfully registered!',
        equipamento,
      });
    } catch {
      response
        .status(400)
        .json({ message: 'Error sending information in the request!' });
    }
  }

  async update(request, response) {}
}

module.exports = EquipamentoController;
