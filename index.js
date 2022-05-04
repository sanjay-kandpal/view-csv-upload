const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const router = express.Router();


app.use(express.urlencoded({ extended: false }));



// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname ,'views'));


// use express router
app.use('/', require('./routes'));

//server fire up on port 8000
app.listen(port, ()=>{
    console.log('Listening to app');
})