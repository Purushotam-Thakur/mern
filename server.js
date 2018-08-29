const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/api/users');

const app = express();

//Body Parser middleware
// It will make to excess of req.body.value
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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
