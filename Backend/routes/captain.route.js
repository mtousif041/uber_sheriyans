const express = require('express')
const captainController = require('../controllers/captain.controller')

const router = express.Router()
const {body} = require("express-validator")
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Emial'), 
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('color  must be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate number  must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity   must be at least 1 persion'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vheicle type'),
],
captainController.registerCaptain
)


router.post('/login',[
    body('email').isEmail().withMessage('Invalid Emial'), 
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
], captainController.loginCaptain)


// profile route 
router.get('/profile',authMiddleware.authCaptain, captainController.getCaptainProfile)
//for captaion logout 
router.get('/logout',authMiddleware.authCaptain, captainController.logoutCaptain)

module.exports = router;