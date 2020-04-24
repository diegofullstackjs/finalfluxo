const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const caixa = new Schema({
    name: {
        type:String,
        required:true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    description: {
        type:String,
        required:true
    },
    total_caixa: {
        type:String
    },
    create_at: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('caixas',caixa)