const RelatorioDesmontagemModel = require('../model/RelatorioDesmontagemModel.js');
const dotenv = require('dotenv');
const RelatorioDesmontagem = require('../utils/HtmlRelatorioDesmontagem.js');

dotenv.config();

// toda a lógica que busca as informações no Model e devolve uma resposta ao usuário
class RelatorioDesmontagemController {
  //retorna 1 dado
  async getOne(request, response) {
    const id = request.params.id;

    try {
      const relatorio = await ScheduleModel.findById(id);

      if (relatorio) {
        return response.send(relatorio);
      }
      response.status(404).send({ message: 'relatorio not found' });
    } catch {
      response.status(400).send({ message: 'An unexpected error happened' });
    }
  }

  //retorna todos
  async index(request, response) {
    try {
      // agendamentos ordenados primeiramente em data e depois em horário
      const relatorios = await RelatorioDesmontagemModel.find();
      response.status(200).send(relatorios);
    } catch (error) {
      response.status(404).json({ message: 'Request failed!' });
    }
  }

  async remove(request, response) {}

  //POST
  async store(request, response) {
    try {
      const relatorio = await RelatorioDesmontagemModel.create(request.body);

      response.status(201).json({
        message: 'html successfully registered!',
        relatorio,
      });
    } catch {
      response
        .status(400)
        .json({ message: 'Error sending information in the request!' });
    }
  }

  async update(request, response) {}
}

module.exports = RelatorioDesmontagemController;
