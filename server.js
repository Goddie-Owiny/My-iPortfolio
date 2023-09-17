const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path');
const nodemailer = require('nodemailer')

const app = express()

// setting the view engine
// app.use('handlebars', exphbs);
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folders
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
     res.render("hello world")
})
   
app.listen(5000, () =>{
    console.log('Server is running on Port 5000') 
}) 