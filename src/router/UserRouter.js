const express = require('express');
const UserController = require('../controller/UserController');

const userController = new UserController();

const router = express.Router();

// midleware
router.use(express.json());

/* forma não enxuta
router.get("/users", (request, response) => {
  ShortnerController.index(request, response);
});
*/

router.get('/user', userController.index);

//router.get('/relatorio/:id', userController.getOne);

router.post('/user', userController.store);

//router.put('/relatorio/:id', userController.update);

//router.delete('/relatorio/:id', userController.remove);

module.exports = router;
