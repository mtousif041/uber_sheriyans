const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/maps.controller')
const {query} = require('express-validator');
// const { getCoordinates } = require('../controllers/maps.controller');

router.get('/get-coordinate', query('address').isString().isLength({min:3}), authMiddleware.authUser,mapController.getCoordinates)

//for get distance between two points 
router.get('/get-distance-time', 
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    
    authMiddleware.authUser,mapController.getDistanceTime)



//for /yaani jab aap location dalte hai to aapko suggestion aaate rhete hai same faetures hume bhi use krna hai 
router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapController.getAutoCompleteSuggestions
)


module.exports = router