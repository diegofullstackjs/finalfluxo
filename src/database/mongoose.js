const mongoose = require('mongoose');

global.Promise = mongoose.Promise;

module.exports = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Banco de dados conectado")
}).catch((e) => {
    console.warn(e)
})