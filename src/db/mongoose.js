//Mongoose https://mongoosejs.com/
//npm i mongoose
const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// DB Model


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
