const mongoose = require('mongoose')
let Schema = mongoose.Schema


var beep = new Schema({
	nombre: String,
	direccion: String,
	comuna: String,
	x: String,
	y: String	
});


module.exports = mongoose.model('beep',beep);