const bip = require('bip');
const parada = require('transantiago-client');
const request = require('request');
const Punto = require('.././models/punto')

module.exports.render = (req,res) => {
	res.send('API Restful Tbeep 2016 :: Version 2')
	res.end();
}


exports.paradero = (req,res) => {
	let paradero = req.params.paradero;

	parada(paradero).then(response =>{
		let data = response;

		res.jsonp(data)
	})
	.error(() => {

		console.log(err);
	});
}

exports.recorrido = (req,res) => {
	let recorrido = req.params.recorrido;
	request('http://www.transantiago.cl/restservice/rest/getrecorrido/'+recorrido, (error, response, body) => {
	  if (!error && response.statusCode == 200) {

	  	let o = JSON.parse(body);

	  	res.jsonp(o);
	    console.log(body) // Show the HTML for the Google homepage.
	  }
	});
}


exports.saldoBip = (req,res) => {
	let saldo = req.params.saldo

	request('http://www.metrosantiago.cl/contents/guia-viajero/includes/consultarTarjeta/' + saldo, (err,resp,body) => {
		if (!err && resp.statusCode == 200) {
			let i = JSON.parse(body)

			res.jsonp(i)
			console.log(i)
		}
	})
}

exports.puntos = (req,res,next) => {
	Punto.find(function(err,data){
		if (err) {
			console.log(err);
		};
		res.json({result:{records:data}});
	});
}