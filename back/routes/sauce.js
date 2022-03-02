const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const userVerif = require('../middleware/userVerif');
const multer = require('../middleware/multer-config');
const validator = require('../middleware/validator');

router.post('/', auth, validator.createSauce, multer, sauceCtrl.createSauce);
router.put('/:id', auth, userVerif, sauceCtrl.modifySauce);
router.delete('/:id', auth, userVerif, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;