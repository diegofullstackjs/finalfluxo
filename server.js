require('dotenv').config()
require('./src/database/mongoose')
const cors = require('cors')
const express = require('express'); /* requirindo a biblioteca */

const app = express(); /* instanciando express */
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes')

app.use(cors()) /*cors */
app.use(bodyParser.json())

app.use(routes)
app.use(bodyParser.urlencoded({extended: true}))

/*Criando servidor e verificando se existe uma variavel
de ambiente se nao existir ${PORT} ele escutara na porta 3000*/
app.listen(process.env.PORT || 3000); /*sasa*/ 