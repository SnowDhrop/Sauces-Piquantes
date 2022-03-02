const {body, validationResult}= require ('express-validator');

exports.createSauce = [
    body('name').trim().escape().bail(),
    body('manufacturer').trim().escape().bail(),
    body('description').trim().escape().bail(),
    body('mainPepper').trim().escape().bail(), (req, res, next) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()});
        };
        next();
    },
];