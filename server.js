const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {addEntryPage, addEntry, deleteEntry, editEntry, editEntryPage} = require('./routes/entries');

const port = 5000;

// create connection to database
const db = mysql.createConnection ({
    host: 'localhost', // for mac 192.168.99.100
    user: 'medi',
    password: 'secret1',
    database: 'medizin'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// routes for the app
app.get('/', getHomePage);
app.get('/add', addEntryPage);
app.get('/edit/:id', editEntryPage);
app.get('/delete/:id', deleteEntry);
app.post('/add', addEntry);
app.post('/edit/:id', editEntry);


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
