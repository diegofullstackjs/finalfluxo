const express = require('express');
const Routes = express.Router();
const Validators = require('../validators/Users')
const AuthMiddleware = require('../middlewares/authentication')
const HomeController = require('../controllers/HomeController')
const TaskController = require('../controllers/TaskController')

const FluxoController = require('../controllers/FluxoController')
Routes.get('/',AuthMiddleware.autenticado,HomeController.home)
Routes.post('/user/create',
            Validators.validate_createUser,
            HomeController.create_a_user)
Routes.post('/user/login',HomeController.login_in)

Routes.post('/task/caixa/create',AuthMiddleware.autenticado,
                                 TaskController.create_a_box)
Routes.post('/task/categorias/create',
            AuthMiddleware.autenticado,
            TaskController.create_a_categories)


Routes.post('/fluxo/create/:caixaid',
                AuthMiddleware.autenticado,
                FluxoController.create_fluxo)
module.exports = Routes;