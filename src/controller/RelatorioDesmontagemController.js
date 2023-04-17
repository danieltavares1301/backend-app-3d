import RelatorioDesmontagemModel from '../model/RelatorioDesmontagemModel.js';
import dotenv from 'dotenv';

dotenv.config();

// toda a lógica que busca as informações no Model e devolve uma resposta ao usuário
class RelatorioDesmontagemController {
  //retorna 1 dado
  async getOne(request, response) {}

  //retorna todos
  async index(request, response) {}

  async remove(request, response) {}

  //POST
  async store(request, response) {}

  async update(request, response) {}
}

export default RelatorioDesmontagemController;
