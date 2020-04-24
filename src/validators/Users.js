const { check } = require('express-validator');

module.exports.validate_createUser = () => {
    check('email').isEmail()
    check('nome').notEmpty()
    check('password').notEmpty().isLength({min:5,max:20})
}