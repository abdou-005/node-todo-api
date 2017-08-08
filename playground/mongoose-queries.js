const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo}  = require('./../server/models/todo');
const {User}  = require('./../server/models/user');
var id = '5988752fd494aa1764b23d1f';
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
//
// Todo.find({
//     _id : id
// }).then((todos)=>{
//     console.log(todos);
// });
//
// Todo.findOne({
//     _id : id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo)=>{
//     if(!todo) return console.log('Id not found');
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


User.findById(id).then((user)=> {
    if(!user) return console.log('Unable to find User');
    console.log('User : ', user)
}, (e) => {
    console.log(e);
});