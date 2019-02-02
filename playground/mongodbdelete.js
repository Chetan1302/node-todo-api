//Object Destructring to get MongoClient  variable
const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/Todo',(err,db)=>{
    if(err) return console.log("Error in database connection",err);
    console.log("TodoDataBase is connected");

   

    //DeleteMany
  /*  db.collection('Todos').deleteMany({text:"Eat a lunch"}).then((result)=>{
        console.log(result);
    })*/

    //DeleteOne
/*db.collection('Todos').deleteOne({text: "Eat a lunch"}).then((result) => {
    console.log(result);
});*/


    //DeleteMany
  /*  db.collection('Todos').deleteMany({text:"Eat a lunch"}).then((result)=>{
        console.log(result);
    })*/

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed : false}).then((result) =>{
        console.log( result);
    })


    //Users
    //DeleteMany
    db.collection("Users").deleteMany({name:"Chetan"});

    //findOneAndDelete
    db.collection("Users").findOneAndDelete({_id: new ObjectID('5c555266c098a152ee33bd8e')}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    })

    //closing the connection
    db.close();
})