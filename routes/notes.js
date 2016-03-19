var express = require('express');
var router = express.Router();
var db = require("mysql");

var connection = require('../config/db');

router.get('/', function (req, res, next) {
	var query = "SELECT place_id,comment,note_id FROM notes";
	// var query = "SELECT place_id,description FROM destinations";
	// console.log("before format query: ",query)
	query = db.format(query);
	// console.log("after format  query: ",query)
	connection.query(query, function (err, note) {
		console.log("add notes")
		if(err) {
			res.status(400).send(err);
			return;
		}
		console.log("note: ", note)
			res.send(note);
	});

});

router.get('/:place_id', function (req, res, next) {
	var query = "SELECT * FROM notes where place_Id =" + req.params.place_id;
	query = db.format(query);

	connection.query(query, function (err, note) {
		// console.log("add note")
		if(err) {
			res.status(400).send(err);
			return;
		}
			res.send(note);
	});

});


router.get('/:note_id', function (req, res, next) {
	var query = "SELECT * FROM notes where note_Id =" + req.params.note_id;
	query = db.format(query);

	connection.query(query, function (err, place) {
		console.log("get the notes")
		if(err) {
			res.status(400).send(err);
			return;
		}
			res.send(note);
	});

});

router.post('/', function(req, res) {
	console.log('req.body: ', req.body);

	// SET is the values
	connection.query('INSERT INTO notes SET ?', req.body, function (err, result) {
		if(err) {
			res.status(400).send(err);
			return;
		}

		res.send(result);
	});
});


router.delete('/:note_id', function(req, res) {
	console.log('req.body: ', req.body);

	// SET is the values
	var noteID = req.params.note_id;
	// console.log(req.params)

	connection.query('DELETE FROM notes WHERE note_id=' + noteID, req.body, function (err, result) {
		if(err) {
			console.log("error: ", err)
			res.status(400).send(err);
			return;
		}

		res.send(result);
	});
});


router.put('/:note_id', function(req, res) {
	console.log('req.body: ', req.body);

	// SET is the values
	var noteID = req.params.note_id;
	connection.query('UPDATE notes SET ? where note_id=' + noteID, req.body, function (err, result) {
		if(err) {
			res.status(400).send(err);
			return;
		}

		res.send(result);
	});
});


module.exports = router;