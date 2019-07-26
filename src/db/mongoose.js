//Mongoose https://mongoosejs.com/
//npm i mongoose
const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true
})

// DB Model
const user = mongoose.model("User", {
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

const me = new user({
    name: "         A l l p",
    email: "Nasme@gmail.com",
    password: "Alppassord"
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})

// mongoose.connect("mongodb://127.0.0.1:27017/task-app-api", {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })

// const task = mongoose.model("Task", {
//     description: {
//         type: String,
//         required: true,
//         trim: true 
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const newTask = new task({
//     description: "Get milk",
//     completed: false
// })

// newTask.save().then(() => {
//     console.log(newTask)
// }).catch((error) => {
//     console.log(error)
// })
