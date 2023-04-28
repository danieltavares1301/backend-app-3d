const express = require('express');
const EquipamentoController = require('../controller/EquipamentoController');

const equipamentoController = new EquipamentoController();

const router = express.Router();

// midleware
router.use(express.json());

/* forma não enxuta
router.get("/users", (request, response) => {
  ShortnerController.index(request, response);
});
*/

router.get('/equipamento', equipamentoController.index);

//router.get('/relatorio/:id', equipamentoController.getOne);

router.post('/equipamento', equipamentoController.store);

//router.put('/relatorio/:id', equipamentoController.update);

//router.delete('/relatorio/:id', equipamentoController.remove);

module.exports = router;
