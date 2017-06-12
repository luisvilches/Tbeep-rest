'use strict'

const express =  require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/index')
const parada = require('transantiago-client');
const request = require('request');
let app = express();


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use('/', routes)

mongoose.connect('mongodb://luisvilches:andres2230@ds017584.mlab.com:17584/restful', err => {
	if (err) {console.log(err)}
})


let port = process.env.PORT || 5000;

app.listen(port, err =>{
	if (err) {console.log(err)}
	console.log('Servidor corriendo en el puerto ' + port)
})
