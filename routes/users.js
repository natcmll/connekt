var express = require('express');
var router = express.Router();
const usersController = require("../controllers/users")

/* GET users listing. */
// router.get('/cadastrarUsuario', ControllerUsuarios.cadastrarUsuario)

/* signIn */
router.get('/signIn', usersController.signIn)

/* signUp */
router.get('/signUp', usersController.signUp)

module.exports = router;
 