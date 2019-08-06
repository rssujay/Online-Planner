const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
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
    if (req.params.userId === 'pasd1iDaj'){
        res.json(stuff);
    }
    else{
        res.json([]);
    }
});

app.use(express.json());

app.post('/api/addItem/:userId', (req,res) => {
    console.log(req.body);
    res.send('Added');
});

app.post('/api/removeItem/:userId', (req,res) => {
    console.log(req.body);
    res.send('Removed');
});

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));