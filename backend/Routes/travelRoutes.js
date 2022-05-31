const { Router } = require('express')
const {
    getAllTravels,
    getTravelById,
    addTravelBook,
    updateTravelBook,
    deleteTravelBook
} = require('../controllers/travelControllers')
const router = Router()

//CRUD

//Get all arrays
router.get('/', getAllTravels)

//Add element
router.post('/add', addTravelBook)

//Get one array`s element
router.get('/:id', getTravelById)

//Edit element
router.put('/:id', updateTravelBook)

//remove element by ID
router.delete('/:id', deleteTravelBook)

module.exports = router