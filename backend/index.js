const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {User} = require('./models/User');

const app = express();
const PORT = process.env.PORT || 8000;

const mongoDB = require('./credentials');
let db = mongoose.connect(mongoDB, { useNewUrlParser: true })
    .then(res => console.log("Connected to DB"))
    .catch(err => console.log(err));

const stuff = [
    {
        id:1,
        name: "Test",
        description: "lorem ipsum",
        due: "19/12/1970"
    },
    {
        id:2,
        name: "Quizzes",
        description: "lorem ipsum",
        due: "19/12/1992"
    },
    {
        id:3,
        name: "Water",
        description: "lorem ipsum",
        due: "19/12/1912"
    }
];

app.get('/:userId', (req, res) => {
    res.sendFile(path.join(__dirname,"../frontend/build/index.html"));
})

app.get('/api/getUser/:userId/', (req, res) => {
    if (req.params.userId){
        User.findOne({"id" : req.params.userId}, (err, results) => {
            if (err){
                console.log(err);
            }
            else if (results) {
                res.json(results.items);
            }
            else {
                const newUser = new User({
                    id: req.params.userId,
                    items: []
                });
                newUser.save().then(user => res.json(user.items));
            }
        });
    }
    else{
        res.json([]);
    }
});

app.use(express.json());

app.post('/api/addItem/:userId', (req,res) => {   
    User.updateOne(
        {"id" : req.params.userId},
        { $push: {"items": {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            due: req.body.due
        }}},
        (err,doc) => {
            console.log(err);
            res.send('Added');
        });
});

app.post('/api/removeItem/:userId', (req,res) => {
    User.updateOne(
        {"id": req.params.userId},
        { $pull: {items : {id : req.body.id}}},
        (err,doc) => {
            console.log(err);
            res.send('Removed');
        }
    )
});

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));