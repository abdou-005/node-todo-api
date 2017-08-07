// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to Mongodb server');
    console.log('Connect to Mongodb server');
    // db.collection('todos').findOneAndUpdate({
    //     _id : new ObjectID('5988637f9adc8f33a9fcb122')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result) => {
    //    console.log(result);
    // });
    db.collection('users').findOneAndUpdate({
        _id : new ObjectID('59871f9073bf5d268c3d3dce')
    },{
        $set:{
            name:'ABD'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });
    //db.close();
});