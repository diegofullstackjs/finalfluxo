const CaixaModel = require('../models/Caixa');
module.exports.create_a_box = async (req,res) => {
        const {caixa,description} = req.body;
        await CaixaModel.create({
            name: caixa,
            user_id: req.usuario.user._id,
            description,
        }).then((box) => {
            return res.status(200).json(box)
        }).catch((e) => {
            console.warn(e)
            return res.status(200).json({message: "Ocorreu um erro ao criar sua caixa"})
        })
}