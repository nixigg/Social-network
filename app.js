const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
dotenv.config()

// db
mongoose.connect(process.env.MONGO_URI, 
  {useNewUrlParser: true, useCreateIndex: true, useFindAndModify:false, useUnifiedTopology: true})
  .then(() => {
    console.log('DB connected')
  })

// routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use('/', postRoutes);
app.use('/', authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on server ${port}`)
});