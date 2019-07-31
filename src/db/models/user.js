const mongoose = require("mongoose")
const validator = require("validator")

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true //remove spaces
    },
    age: {
        type: Number,
        default: 0,
        validate(value) { //use npm validator
            if(value < 0){
                throw new Error("Age must be positive")
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim:true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error("Not a valid email!")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Password cannot conatin password")
            }
        }
    }
})

module.exports = User