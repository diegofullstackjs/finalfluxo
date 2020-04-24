const CaixaModel = require('../models/Caixa');
const CategoriaModel = require('../models/Categorias')
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

module.exports.create_a_categories = async (req,res) => {

      const {name,description} = req.body;
      const id = req.usuario.user._id;

      await CategoriaModel.create({
          name,
          description,
          user_id: id
      }).then((resolve) => {
        return res.status(200).json(resolve)
      }).catch((e) => {
        console.warn(e)
        return res.status(200).json({
            message: `Ocorreu um erro ao criar a categoria ${name}`
        })
    })

}