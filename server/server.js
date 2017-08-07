var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
   Todo.find().then((docs)=> {
       console.log(docs);
       res.send(docs);
   }, (e) => {
       res.status(400).send(e);
   });
});
app.listen(3000, () => {
   console.log('Server started on port 3000')
});

module.exports = {app}; // ES6 syntax
// var newTodo = new Todo({
//     text:'Cook dinner'
// });
// newTodo.save().then((doc) => {
//     console.log(doc);
// }, (e) =>{
//     console.log('Unable to save todo');
// });
//
// var otherTodo = new Todo({
//     text:'Cook dinner',
//     completed : true,
//     completedAt: 123
// });
// otherTodo.save().then((doc) => {
//     console.log(doc);
// }, (e) =>{
//     console.log('Unable to save', e);
// });
//
// var user =  new User({
//     email:'abd@example.com'
// });
//
// user.save().then((user) => {
//     console.log(user);
// }, (e) =>{
//     console.log('Unable to save', e);
// });
