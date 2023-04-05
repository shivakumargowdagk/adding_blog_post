const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const Route = require('./routes/index');
const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();


app.use(bodyparser.json());
app.use(express.json());
app.use('/', Route);

//app.get('/', (req, res) => res.send('Its  working'));

mongoose.set('strictQuery', false);

/* mongodb connection */
mongoose
  .connect('mongodb://localhost:27017/blogdb', {useNewUrlParser: true})
  .then(console.log("database connected"))
  .catch((err) => console.log(err));


/* server */
const port = process.env.PORT || 3000;
app.listen(port, (req, res, next) => console.log(`PORT is running on ${port}`));

