const {check, validationResult}= require ('express-validator');


exports.email = [check('email', 'Email Invalid').isEmail().normalizeEmail(), (req, res, next) => {
    const emailError = validationResult(req);
    
    if (!emailError.isEmpty()){
        return res.status(400).json({emailError: emailError.array()});
    };
    next();
},];