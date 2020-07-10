const express =require('express');
const cors =require('cors');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    return db.Todo.find()
    .then(todos=>{
        return res.json(todos);
    })
})

app.delete('/:id', (req,res)=>{
    return db.Todo.deleteOne({
        _id:req.params.id
    })
    .then(todos=>{
        return res.json({"message":"Deleted successfully"});
    });
})

app.post('/', (req,res)=>{
    const todo = new db.Todo({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    });
    todo.save();
    return res.json({"message":"Saved successfully"});
})

app.listen(9000);