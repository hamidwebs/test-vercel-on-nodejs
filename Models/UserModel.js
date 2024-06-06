const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    userPic: {
        type: String
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Local"
    }
});

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;