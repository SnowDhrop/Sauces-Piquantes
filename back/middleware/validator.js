const {check, validationResult}= require ('express-validator');

exports.email = [check('email', 'Email Invalid').isEmail().normalizeEmail(), (req, res, next) => {
    const emailError = validationResult(req);
    
    if (!emailError.isEmpty()){
        return res.status(400).json({emailError: emailError.array()});
    };
    next();
},
];

exports.createSauce = [
    check('name', 'Wrong Name').blacklist('&'),
    check('manufacturer').trim().escape().bail(),
    check('description').trim().escape().bail(),
    check('mainPepper').trim().escape().bail(), (req, res, next) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()});
        };
        console.log('ici');
        console.log(errors);
        next();
        console.log('là');
    },
];

