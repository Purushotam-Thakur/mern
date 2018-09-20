const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const usersRouter = require('./routes/api/users');
const profileRouter = require('./routes/api/profile');
const postsRouter = require('./routes/api/posts');

const app = express();

// Body Parser middleware
// It will make to excess of req.body.value
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to mongo DB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected Successfully'))
    .catch(err => console.log(`MongoDB Connection ERROR: ${err}`));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.get('/', (req, res) => res.send('Hello World'));

// Use Routes
app.use('/api/users', usersRouter);
app.use('/api/profile', profileRouter);
app.use('/api/posts', postsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server runing on port : ${port}`));
