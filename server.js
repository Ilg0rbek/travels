const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')


dotenv.config()

connectDB()

const app = express()

//Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 4000

app.use('/api/travel', require('./Routes/travelRoutes'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})