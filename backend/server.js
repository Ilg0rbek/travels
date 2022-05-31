const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const cors = require('cors')


// Config DotEnv
dotenv.config()

//connect DB
connectDB()


const app = express()

//Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const PORT = process.env.PORT || 4000


app.use('/api/travel', require('./Routes/travelRoutes'))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})