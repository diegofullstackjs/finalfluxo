const jwt = require('jsonwebtoken')

module.exports.autenticado = async (req,res,next) => {
    const cabeceira = req.headers.authorization;

    const token = cabeceira.split('Bearer ')[1]
    
    try{
        await jwt.verify(token,process.env.KEY,(err,usuario) => {
            if(err){
                res.status(500).json({
              message: 'Nao foi possivel gerar a token'});  
            }
            req.usuario = usuario;
            next();
        })
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Ocorreu um erro"});
    }
}