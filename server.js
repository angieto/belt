const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./server/routes');

// allow deep parsing that can deal w/ nested objects
app.use(bodyParser.urlencoded({extended:true})); 
// parse json data
app.use(bodyParser.json());

// set the static path inside angular's distribution folder
app.use(express.static(path.join(__dirname, '/angular/dist/angular')));

router(app);

app.listen(8000, errs => console.log(errs?errs:"app running"));