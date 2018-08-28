const express = require('express');
const app = express();
const mongoose = require('mongoose');

const usersRouter = require('./routes/api/users');

//DB config
const db = require('./config/keys').mongoURI;

//Connect to mongo DB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected Successfully'))
    .catch(err => console.log(`MongoDB Connection ERROR: ${err}`));




app.get('/', (req, res) => res.send('Hello World'));

//Use Routes

app.use('/api/users', usersRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server runing on port : ${port}`));