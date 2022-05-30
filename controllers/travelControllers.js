const Travel = require('../models/Travel.model')

//Method: GET
// Desc:  GET all Travel arrays
const getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.find()
        res.status(200).json({
            message: 'Success',
            travels
        })
    } catch (error) {
        res.send(error.message)
    }
}

//Method:  GET
//Desc:    GET one array`s element in Travel
const getTravelById = async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id)

        if (!travel) {
            return res.status(404).json({
                message: "Not found"
            })
        }
        return res.status(200).json({
            message: "Success",
            travel
        })
    } catch (error) {
        res.send(error.message)
    }
}

//Method:  POST
//Desc:    Add one new element in Travel
const addTravelBook = async (req, res) => {
    try {
        const { title, image, desc } = req.body

        const newTravel = await Travel.create({
            title,
            image,
            desc
        })
        res.status(201).json({
            messgae: 'success',
            newTravel
        })
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    getAllTravels,
    getTravelById,
    addTravelBook
}