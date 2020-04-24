const { check } = require('express-validator');

module.exports.validate_createUser = [
    check('email').isEmail().withMessage("email deve ser valido"),
    check('nome').notEmpty(),
    check('password').notEmpty().isLength({min:5,max:20})
]