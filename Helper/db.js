const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://hamiddev786:OLXClone.786@olx-clone.f0cjebn.mongodb.net/OLX-DataBase"

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected To MongoDB');
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectToMongoDB;