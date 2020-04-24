const {Fluxo,Caixa} = require('../models/')
module.exports.create_fluxo = async (req,res) => {
    const caixaid = req.params.caixaid;
    const {tipo,quantidade,categoria} = req.body;
 const caixa = await Caixa.findOne({_id:caixaid}).exec()
    if(caixa.user_id != req.usuario.user._id)
    {
        return res.status(200).json({
            message: "Desculpa mas esse caixa nao te pertence"
        })
    }
const update = parseFloat(caixa.total_caixa) + parseFloat(quantidade);
  await Fluxo.create({
        quantidade,
        tipo,
        id_caixa : caixaid,
        id_user: req.usuario.user._id,
        id_categorias: categoria,
    }).then(async (fluxo) => {
        if(fluxo){
             caixa.total_caixa = update;
             await caixa.save()
            return res.status(200).json(fluxo)
        }
        
    }).catch((e) => {
        console.log(e)
        return res.status(500).json(fluxo)
    })


}