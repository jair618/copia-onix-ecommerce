"use strict";
const express = require('express');
const routes = require('./routes');

const app = express();

app.set('port', process.env.PORT || 9000);

var cors = require("cors");
app.use(cors({
    origin: "*",
    // credentials: true,
}));

app.use(
    express.urlencoded({
      extended: true
    })
);
  
app.use(express.json());

// routes-----------------------
app.use('/api', routes);

// server runing ----------------------
app.listen(app.get('port'), ()=>{
    console.log('http://localhost:', app.get('port'));
});