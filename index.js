const express = require('express');
const app = express();


const port = 8000;
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())


  
// make upload available path to the browser
 app.use('/uploads',express.static(__dirname + '/uploads'));


    

    

app.use('/', require('./routes'));
// view engine setup
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname ,'views'));


// use express router


//server fire up on port 8000
app.listen(port, ()=>{
    console.log('Listening to app');
})