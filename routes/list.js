var express = require('express');
var router = express.Router();
var db = require("mysql");

var connection = require('../config/db');

router.get('/', function (req, res, next) {
	var query = "SELECT place_id, location, description, image FROM destinations";
	// console.log("before format query: ",query)
	query = db.format(query);
	// console.log("after format  query: ",query)
	connection.query(query, function (err, place) {
		console.log("add place")
		if(err) {
			res.status(400).send(err);
			return;
		}
			res.send(place);
	});

});

router.get('/:place_id', function (req, res, next) {
	var query = "SELECT * FROM destionas where place_Id =" + req.params.place_id;
	query = db.format(query);

	connection.query(query, function (err, place) {
		console.log("add place")
		if(err) {
			res.status(400).send(err);
			return;
		}
			res.send(place);
	});

});


router.get('/:place_id', function (req, res, next) {
	var query = "SELECT * FROM notes where place_Id =" + req.params.place_id;
	query = db.format(query);

	connection.query(query, function (err, place) {
		console.log("get the notes")
		if(err) {
			res.status(400).send(err);
			return;
		}
			res.send(place);
	});

});

router.post('/', function(req, res) {
	console.log('req.body: ', req.body);

	// SET is the values
	connection.query('INSERT INTO destinations SET ?', req.body, function (err, result) {
		if(err) {
			res.status(400).send(err);
			return;
		}

		res.send(result);
	});
});


router.delete('/:place_id', function(req, res) {
	console.log('req.body: ', req.body);

	// SET is the values
	var placeID = req.params.place_id;

	connection.query('DELETE FROM destinations WHERE place_id=' + placeID, req.body, function (err, result) {
		if(err) {
			res.status(400).send(err);
			return;
		}

		res.send(result);
	});
});


router.put('/:place_id', function(req, res) {
	console.log('req.body: ', req.body);

	// SET is the values
	var placeID = req.params.place_id;
	connection.query('UPDATE destinations SET ? where place_id=' + placeID, req.body, function (err, result) {
		if(err) {
			res.status(400).send(err);
			return;
		}

		res.send(result);
	});
});


module.exports = router;