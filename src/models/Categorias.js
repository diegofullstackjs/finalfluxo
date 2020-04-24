const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Categorias = new Schema({
    name: {type:String,required:true},
    description:{type:String,required:true},
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('categorias',Categorias)