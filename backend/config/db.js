const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true
        })
        console.log(`connect db successfully: ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB