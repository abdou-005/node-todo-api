// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) return console.log('Unable to connect to Mongodb server');
    console.log('Connect to Mongodb server');

    // deleteMany
    // db.collection('todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //         console.log(result);
    // });
    // findOneAndDelete
    // db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
    //         console.log(result);
    // });

    db.collection('users').deleteMany({name : 'ABD'});
    db.collection('users').findOneAndDelete({
        _id: new ObjectID('59871f99fc308f33b8147beb')
    }).then((results) => {
       console.log(JSON.stringify(results, undefined,2));
    });
    //db.close();
});