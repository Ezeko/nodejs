//roJvlMY8Lqep3SxB

const express = require('express'); //import express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const Router = require('./routers/router.js')
const app = express();

//connecting to atlas

mongoose.connect('mongodb+srv://Ezeko:roJvlMY8Lqep3SxB@cluster0-rlzyx.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log('connected to mongodb atlas successfully!');
    }).catch((error)=>{
        console.log({
            error: error
        });
    });



    //cross origin resources share
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
      });
   app.use(cors());
app.use(bodyParser.json());
app.use('/api/stuff', Router)

module.exports = app;
