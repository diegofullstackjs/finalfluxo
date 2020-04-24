const {Fluxo} = require('../models/')
module.exports.create_fluxo = async (req,res) => {
    const caixaid = req.params.caixaid;
    const {tipo,quantidade,categoria} = req.body;
  await Fluxo.create({
        quantidade,
        tipo,
        id_caixa : caixaid,
        id_user: req.usuario.user._id,
        id_categorias: categoria,
    }).then((fluxo) => {
        return res.status(200).json(fluxo)
    }).catch((e) => {
        console.log(e)
        return res.status(500).json(fluxo)
    })


}