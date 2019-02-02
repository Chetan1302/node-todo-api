const {MongoClient,ObjectID} = require('mongodb');

//To connect to database. first argument is string and second is callback function to return true or false.
MongoClient.connect("mongodb://localhost:27017/Todo",(err,db)=>{
if(err){
    return console.log(`Unable to connect to Database due to error ${err}`);
}

console.log("Connected to Database");

//For inserting data in collection
/*db.collection('Todos').insertOne({
    text: "Go To Office",
    completed: false
},(err,result) =>{
    console.log(JSON. stringify(result.ops,undefined,2));
})
*/

//Fetching all documentsfrom collection Todo
db.collection('Todos').find().toArray().then((docs) =>{
    console.log("Todos");
    console.log(JSON.stringify(docs,undefined,2));
}).catch((err)=>{
  console.log("Error fetching elements",err);  
});


//Fetching only selected data based on query
db.collection('Todos').find({completed: false}).toArray().then((docs) =>{
    console.log("Pending Todo List is");
    console.log(JSON.stringify(docs,undefined,2));
}).catch((err)=>{
    console.log("Error Fetching Elements",err);
})

//Fetching Data based on ObjectID
db.collection('Todos').find({
    _id : new ObjectID('5c4dd0b58a6d092728c9b613')
}).toArray().then((docs)=>{
    console.log('Document of Requested ObjectID is');
    console.log(JSON.stringify(docs,undefined,2));
}).catch((err)=>{
    console.log("Error Fetching Elements is",err);
})



//Fetching count of documents within collection
db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos Count:${count}`);
}).catch((err)=>{
    console.log("Error Fetching Elements is",err);
});

//Fetching user with name Akshay
db.collection("Users").find({name: "Akshay"}).toArray().then((docs) =>{
    console.log("Users");
    console.log("Are ",JSON.stringify(docs,undefined,2));
}).catch((err) => {
    console.log("Error Fetching Elements is",err);
})

//Fetching count of Users
db.collection("Users").find().count().then((count)=>{
    console.log("Number of Users are");
    console.log(JSON.stringify(count,undefined,2));
}).catch((err)=>{
    console.log("Error Fetching count is",err);
})
//closing database
db.close();

})