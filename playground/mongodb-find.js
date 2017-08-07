// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to Mongodb server');
    console.log('Connect to Mongodb server');
    // db.collection('todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch todos,',err);
    // });

    db.collection('users').find({name: 'ABD'}).toArray().then((users) =>{
        console.log(users);
    }, (err) => {

    });
    //db.close();
});