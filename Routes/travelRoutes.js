const { Router } = require('express')
const {
    getAllTravels,
    getTravelById,
    addTravelBook
} = require('../controllers/travelControllers')
const router = Router()

//CRUD

//Get all arrays
router.get('/', getAllTravels)

//Add element
router.post('/add', addTravelBook)

//Get one array`s element
router.get('/:id', getTravelById)

module.exports = router