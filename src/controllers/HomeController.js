const {
   Caixa,
   Usuario
} = require('../models/index')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
module.exports.home = async (req,res) => {
    await Caixa.find({user_id:req.usuario.user._id})
    .populate('user_id').then((box) => {
         if(box)
         {
             return res.status(200).json(box)
         }
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