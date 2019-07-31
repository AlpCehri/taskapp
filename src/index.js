const express = require("express")
require("./db/mongoose")
const User = require("./db/models/user")
const Task = require("./db/models/task")
///Users/cehri/mongodb/bin/mongod.exe --dbpath=/Users/Cehri/mongodb-data

const app = express()
const port = process.env.PORT || 3000 

app.use(express.json())

app.post("/users", async (req, res) => {
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
    
     
    // user.save().then(() => {
    //     res.status(201),send(user)
    // }).catch((error) => {
    //     res.status(400).send(e)
    // })
})

app.post(("/tasks"), async (req, res) => {
    const task = new Task(req.body)

    try{
        await res.save()
        res.status(201).send(task)
    }catch(e){
        res.status(500).send()
    }


})

app.get(("/users"), async (req, res) => {
    try{
        const users = await User.find({})
        res.send(users)
    }catch(e){
        res.status(500).send()
    }
    	// User.find({}).then((users) => {
        //     res.send(users)
        // }).catch((e) => {
        //     res.status(500).send()
        // })
})

app.get(("/users/:id"), async (req, res) => {
    const _id = req.params.id

    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){ 
        res.status(500).send()
    }
})

app.get(("/tasks"), async (req,res) => {
    try{
        const tasks = Task.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send()
    }
})

app.get(("/tasks/:id"), async (req, res) => {
    const _id = req.params.id

    try{
    const task = await Task.findById(_id)
    if(!task){
        return res.status(404).send()
    }
}catch(e) {
    res.status(500).send()
}

})

app.listen(port, () => {
    console.log("Server is up on " + port)
})

//change scrips in package.json use nopm run dev to run


/*
chaining promises
 



*/