//Data sources  - linked to routes

var friendsData 	= require('../data/friends.js');
var path 			= require('path');

//Routes

module.exports = function(app){

//GET req for friends json table tada

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

//POST req for survey results, adds jason data to array

	app.post('/api/friends', function(req, res){

//Pushes to friends data and finds match

		friendsData.push(req.body);
		res.json(friendsData);


	});
}