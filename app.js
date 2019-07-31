//Installing mongodb https://www.mongodb.com/download-center/community change to ZIP
//extract zip and rename to mongodb
//move to C:\Users\cehri then add mongodb-data folder
//open powershell /Users/cehri/mongodb/bin/mongod.exe --dbpath=/Users/Cehri/mongodb-data
//waiting for connections on port 27017
//we need gui tools for mongodb -> robo 3t https://robomongo.org/
//Download Robo 3T
//In robo 3T press "create" top left 
//Change name "LocalMongofb database"
//Install GUI moodule
//https://docs.mongodb.com/ecosystem/drivers/
// http://mongodb.github.io/node-mongodb-native/3.2/api/
// https://www.npmjs.com/package/mongodb

//CRUB Creat read update delete
//  const mongodb = require("mongodb")
//  const MongoClient = mongodb.MongoClient
//  const ObjectID = mongodb.ObjectID

//or this

// const { MongoClient, ObjectID} = require("mongodb")

//  const connectionURL = "mongodb://127.0.0.1:27017"
//  const databaseName = "taskapp"

//  const id = new ObjectID()
//  console.log(id.getTimestamp())

// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
//     if(error){
//         return console.log("Unable to connect")
//     }
    
//     const db = client.db(databaseName)

    ///!!!CREATE!!!///

    // db.collection("users").insertOne({
    //     _id: id,
    //     name: "Murat",
    //     age: 23
    // }, (error, result) => {
    //     if(error){
    //         return console.log("Unable to add user")
    //     }

    //     console.log(result.ops)
    // })

    // db.collection("users").insertMany([
    //     {
    //         name: "Jen",
    //         age: 23
    //     },
    //     {
    //         name: "Pla",
    //         age: 12
    //     }
    // ], (error, result)=> {
    //     if(error){
    //         return console.log("Unable to send")
    //     }

    //     console.log(result.ops)

    // })

//     db.collection("tasks").insertMany([
//         {
//             description:"Buy milk",
//             completed: true
//         },
//         {
//             description:"Buy more milk",
//             completed: false
//         },
//         {
//             description:"Buy all the milk milk",
//             completed: false
//         }
//     ], (error, result) => {
//         if(error){
//             return console.log("Cannot add tasks")
//         }

//         console.log(result.ops)
//     })

//How a ID is saved -> Ids are binary data
// console.log(id.id.length)
// console.log(id.toHexString().length)

//!!!READ!!!

// db.collection("users").findOne({ _id: new ObjectID("5d38ef2abb64f32d9cdbcc3d") /*what we are searching for  */}, (error, user) => {
//     if(error){
//         return console.log("Unable to connect")
//     }

//     if(user === null){
//         return console.log("No user found")
//     }

//     console.log(user)
// })

// db.collection("users").find({age: 27}).count((error, result) => {
//     console.log(result)
// }) 

// db.collection("tasks").findOne({_id: new ObjectID("5d38f0a806100e2b1ca09de8")}, (error, user) => {
//     if(error){
//         return console.log("Cannot find task")
//     }

//     console.log(user)
// })

// db.collection("tasks").find({completed: false}).toArray((error, result) =>{
//     console.log(result)
// } )

//Promises

// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//         callback("Error", undefined)
//     }, 2000)
// }

// doWorkCallback((error, result) => {
//     if(error){
//         return console.log("Dump error")
//     }
// })

// //or

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve("Success")
//         reject("Failure")
//     },2000)
// })

// doWorkPromise.then((result) => {  //only on success
//     console.log("Success", result)
// }).catch((error) => {   //only on failure
//     console.log("Error", error)
// })

//!!!UPDATING!!!
// const updatePromise = db.collection("users").updateOne({_id: new ObjectID("5d38e8bbda96cc072494f094")}, 
// {
    // $set: {
    //     name: "Moss"
    // }

//     $inc: { //increment
//         age: 1
//     }
// })

// updatePromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// const updatePromise = db.collection("tasks").updateMany({completed: false}, {
//     $set: {
//         completed: true
//     }
// })

// updatePromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

//!!!DELETE!!!

// db.collection("users").deleteMany({age: 23}).then((result)=> {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// db.collection("tasks").deleteOne({_id: new ObjectID("5d38f0a806100e2b1ca09dea")}
// ).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// }) 

//REST API -> Represntational State Transfer
//Installing Postman https://www.getpostman.com/
//get nodemon as dev dep and express as dependency



// })


