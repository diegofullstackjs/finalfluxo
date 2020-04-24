const {
   Caixa,
   Usuario,
   Fluxo
} = require('../models/index')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
module.exports.home = async (req,res) => {
    const userCaixas = await Caixa.find({user_id:req.usuario.user._id}).exec();
    const userCategories = await Caixa.find({user_id:req.usuario.user._id}).exec();
    const fluxoCaixa = await Fluxo.find({id_user:req.usuario.user._id})
                        .populate('id_caixa')
                        .populate('id_user')
                        .populate('id_categorias').exec()

    return res.status(200).json({
        user_categories: userCategories,
        user_caixas: userCaixas,
        fluxo: fluxoCaixa
    });
}

module.exports.create_a_user = async (req,res) => {
    const {email,nome,password} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
   await Usuario.create({
        nome,
        email,
        password,
    }).then((data) => {
        return res.status(200).json(data)
    }).catch((e) => {
        console.warn(e)
        return res.status(500).json({
            message: "Ocorreu um erro inesperado"
        })
    })
    
}

module.exports.login_in = async (req,res) => {
    const {email,password} = req.body;

    await Usuario.findOne({email:email})
        .then(async (user) => {
            if(user){
                if(user.password === password)
                {
                    user.password = undefined;
                    const token =  await jwt.sign({user},
                                    process.env.KEY,
                                    {
                                        expiresIn: '7d'
                                    })
                    return res.status(200).json({
                        user: user,
                        token: token
                    }) 
                }else{
                    return res.status(200).json({
                        message: "Sua senha é invalida"
                    }) 
                }
            }
            return res.status(404).json({
                message: "Usuario nao encontrado"
            });
        }).catch(e => console.log(e))
}   