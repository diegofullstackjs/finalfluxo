const {Schema,model,Types} = require('mongoose')


const Fluxo = new Schema({
    quantidade:{
        type: Number,
        required: true
    },
    tipo:{
        type: String,
        enum: ["Entrada","Saida"]
    },
    id_caixa: {
        type: Types.ObjectId,
        ref: 'caixas'
    },
    id_user: {
        type: Types.ObjectId,
        ref: 'usuarios'
    },
    id_categorias: {
        type: Types.ObjectId,
        ref: 'categorias'
    }
});


module.exports = model('fluxos',Fluxo);