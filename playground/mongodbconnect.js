//Without Object Destructuring
//const MongoClient = require('mongodb').MongoClient;


//With Object Destructuring
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(`ObjectiD is ${obj}`);

//Object Destructuring
// By using object destructuring you can pull out property from the object and assign in in variable
//var user = {name:"chetan", age: 25};
//var {name} = user;
//console.log(`Name is ${name}`);



//To connect to database. first argument is string and second is callback function to return true or false.
MongoClient.connect('mongodb://localhost:27017/Todo',(err,db) =>{
if(err){
   return  console.log('Unable to connect to MongoDb Server');
}
console.log('Connected to MongoDb Server');



/************************************************************* 
//Creating collection Todos and insert one record
db.collection('Todos').insertOne({
    text:'something to do',
    completed: false
},(err,result) => {
    if(err){
        return console.log("unable to create collection Todos");
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops[0]._id.getTimestamp());
})

//Creating Collection Users and insert one record
db.collection('Users').insertOne({
    _id:'123',
    name:"Chetan",
    age:30,
    location:"Thakurli"
},(err,result)=>{
    if(err){
        return console.log("Unable to create collection Users" + err);
    }
    console.log(JSON. stringify(result.ops,undefined,2));
})
**************************************************************/



//closing database
db.close();
})



/*

objectID: 12 byte value
4 byte - timestamp
3 byte - machine identifier
2 byte - process id
3 byte - counter   --- similar to sql id


Connected to MongoDb Server
[
  {
    "text": "something to do",
    "completed": false,
    "_id": "5c4db7f7a84ca52d08e8bdc9"
  }
]
[
  {
    "name": "Chetan",
    "age": 30,
    "location": "Thakurli",
    "_id": "5c4db7f7a84ca52d08e8bdca"
  }
]


*/
