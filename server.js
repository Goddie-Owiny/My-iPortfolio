const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const cors = require('cors')
const path = require('path');
const nodemailer = require('nodemailer')

const app = express()

app.use(express.json())
app.use(cors()) 


// setting the view engine
app.set('views', './views')
app.set('view engine', 'ejs') 

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

// Static folders
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/', (req, res) => {
     res.render("hello world")
})
   
const PORT = process.env.PoRT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is Running on port...: ${PORT}`) 
}) 