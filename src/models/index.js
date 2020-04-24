const CaixaModel = require('./Caixa');
const CategoriasModel = require('./Categorias');
const UsuariosModel = require('./Usuario')
const FluxoModel = require('./Fluxo');
module.exports = {
    Caixa: CaixaModel,
    Categorias: CategoriasModel,
    Usuario: UsuariosModel,
    Fluxo: FluxoModel
}