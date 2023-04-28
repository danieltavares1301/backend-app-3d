const express = require('express');
const RelatorioDesmontagemController = require('../controller/RelatorioDesmontagemController');

const relatorioDesmontagemController = new RelatorioDesmontagemController();

const router = express.Router();

// midleware
router.use(express.json());

/* forma não enxuta
router.get("/users", (request, response) => {
  ShortnerController.index(request, response);
});
*/

router.get('/relatorio', relatorioDesmontagemController.index);

//router.get('/relatorio/:id', relatorioDesmontagemController.getOne);

router.post('/relatorio', relatorioDesmontagemController.store);

//router.put('/relatorio/:id', relatorioDesmontagemController.update);

//router.delete('/relatorio/:id', relatorioDesmontagemController.remove);

module.exports = router;
