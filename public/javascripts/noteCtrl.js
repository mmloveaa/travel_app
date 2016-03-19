'use strict';

var app = angular.module('travelApp');

app.controller('noteCtrl', function ($scope, $state, noteFactory) {

	// if (!$scope.newNote) $scope.newNote = {}
$scope.init = function () {
	noteFactory.fetch($state.params.id).then(function (res) {
		$scope.notes = res.data;
		console.log("$scope notes: ", $scope.notes)
	}, function(err) {
		console.log('err: ',err);
	});

}
		
$scope.init();
		
	$scope.addNote = function(newNote) {
		// console.log('newNote: ', newNote);
		var note = {};
		note.comment = newNote;
		note.place_id = $state.params.id;
		noteFactory.create(note).then(function(res) {

			$scope.init();

		}, function(err) {
			console.error('err: ', err);
		});
	};


	$scope.editNote = function(note) {
		$scope.listEd = angular.copy(note);
	}

	$scope.cancelEditing = function() {
		$scope.listEd=undefined;
		$scope.newNote=undefined;
	}

	$scope.commitEdit = function(note) {
		console.log("note: ", note)
		noteFactory.update(note).then(function() {
			$scope.notes.splice($scope.notes.findIndex(e => e.note_id === note.note_id), 1, angular.copy(note));
			$scope.note = undefined;
			$scope.note="";
			$('#edit-card-modal').modal('hide');
		});
	}


	$scope.removeNote = function(note,note_id) {
		console.log("note: ", note)
		noteFactory.remove(note)
		.then(function(note) {
			noteFactory.fetch().then(function(res) {
				$scope.notes = res.data;
			}, function(err) {
				console.error('err: ', err);
			});

		}, function(err) {
			console.error(err)
		});
	}


})

