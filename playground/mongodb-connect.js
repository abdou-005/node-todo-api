// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
// var user = {name:'ABD', age:25};
// var {name} = user; // ES6
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to Mongodb server');
    console.log('Connect to Mongodb server');
    // db.collection('todos').insertOne({
    //     test : 'Somthing To Do',
    //      completed : false
    // }, (err, result) => {
    //     if(err) return console.log('Unable to insert todos', err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('users').insertOne({
    //     name : 'ABD',
    //     age: 25,
    //     location: 'Tunisia'
    // }, (err, results) =>{
    //         if(err) return console.log('Unable to insert user', err);
    //     console.log(results.ops[0]._id.getTimestamp());
    //     console.log(JSON.stringify(results.ops, undefined, 2));
    // });
    db.close();
});