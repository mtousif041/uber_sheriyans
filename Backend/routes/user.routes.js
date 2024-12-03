const express = require('express')
const router = express.Router();
const {body} = require('express-validator') // yaani hume express-validator se sirf body chaye naaki pura express validator , isliye humne body ko express-validator destructure kr liya 
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Emial'), //yaani body ke ander jobhi email  aayega use check krlo ki vo isEmail hai, agr nhai hua to invalid emial ka message bhej do.
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
], userController.registerUser)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Emial'), //yaani body ke ander jobhi email  aayega use check krlo ki vo isEmail hai, agr nhai hua to invalid emial ka message bhej do.
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
userController.loginUser)


router.get('/profile',authMiddleware.authUser, userController.getUserProfile)
router.get('/logout',authMiddleware.authUser, userController.logoutUser)


module.exports = router;