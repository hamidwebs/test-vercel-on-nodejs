// All imports
const bcrypt = require('bcrypt')
const UserModel = require('../Models/UserModel')

module.exports = async function (request, response) {
    try {
        const { firstName, lastName, email, password, userPic, mobileNumber, address, status } = request.body;
        const isUserExist = await UserModel.find({ email })
        if (isUserExist.length) {
            return response.status(200).json({
                message: "User with this Email already exists.",
                success: false,
                user: []
            })
        }
        if (!firstName) {
            return response.status(200).json({
                message: "Please Provide First Name.",
                success: false,
                user: []
            })
        }
        if (!lastName) {
            return response.status(200).json({
                message: "Please Provide Last Name.",
                success: false,
                user: []
            })
        }
        if (!email) {
            return response.status(200).json({
                message: "Please Provide Email Address.",
                success: false,
                user: []
            })
        }
        if (!password) {
            return response.status(200).json({
                message: "Please Provide Password.",
                success: false,
                user: []
            })
        }
        if (!mobileNumber) {
            return response.status(200).json({
                message: "Please Provide Mobile Number.",
                success: false,
                user: []
            })
        }
        if (!address) {
            return response.status(200).json({
                message: "Please Provide Address.",
                success: false,
                user: []
            })
        }
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        const User = new UserModel({firstName, lastName, email, password: hashedPassword, userPic, mobileNumber, address, status})
        const createdUser = await User.save();
        response.status(201).json({
            message: "User Created Successfully.",
            success: true,
            user: createdUser
        })
    } catch (error) {
        response.status(400).json({
            message: 'Internal Server Error.',
            success: false,
            user: []
        })
    }
}