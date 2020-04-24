const express = require('express');
const Routes = express.Router();
const AuthMiddleware = require('../middlewares/authentication')
const HomeController = require('../controllers/HomeController')
const TaskController = require('../controllers/TaskController')
Routes.get('/',AuthMiddleware.autenticado,HomeController.home)
Routes.post('/user/create',HomeController.create_a_user)
Routes.post('/user/login',HomeController.login_in)

Routes.post('/task/caixa/create',AuthMiddleware.autenticado,TaskController.create_a_box)
module.exports = Routes;