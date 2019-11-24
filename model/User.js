// @github_bosheca
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    firstname: {
        required: false,
        type: String
    },
    lastname: {
        required: false,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String

    },
    isLogedIn: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})



const User = mongoose.model('user', userSchema)
module.exports = User