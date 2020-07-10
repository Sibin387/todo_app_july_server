const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo-server-july',{
    useNewUrlParser: true
});

const Todo = mongoose.model('Todo',{
    title: String,
    description: String,
    date: Date,
});

module.exports = {
    Todo
}