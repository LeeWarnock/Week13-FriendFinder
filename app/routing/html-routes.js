//Dependencies
var path = require('path');

//Routes

module.exports = function(app){

//GET req
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

//Sends user home if no match
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}