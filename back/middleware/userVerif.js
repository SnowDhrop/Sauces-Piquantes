const Sauce = require('../models/Sauce');

module.exports = (req, res, next) => {
    try{
        Sauce.findOne({_id: req.param.id})
            .then(sauce => {
                if (!sauce) {
                    return res.status(404).json({
                        error: new Error('Objet non trouvé')
                    });
                };
    
                if (sauce.userId !== req.auth.userId){
                    return res.status(401).json({
                        error: new Error('Requête non autorisée')
                    });
                };
            });
        
    }catch(error){
        res.status(401).json({error});
    }
}