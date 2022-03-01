const {check, validationResult}= require ('express-validator');

const User = require('../models/User');

exports.email = [check('email', 'Email Invalid').isEmail()];