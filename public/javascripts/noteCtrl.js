'use strict';

var app = angular.module('travelApp');

app.controller('noteCtrl', function ($scope, $state, noteFactory) {

	// if (!$scope.newNote) $scope.newNote = {}
$scope.init = function () {
	noteFactory.fetch($state.params.id).then(function (res) {
		$scope.notes = res.data;
		// console.log("$scope notes: ", $scope.notes)
	}, function(err) {
		console.log('err: ',err);
	});

}
		
$scope.init();

// $scope.reset = function() {
//         $scope.comment = '';
//         console.log("reset is running")
//     };
		
	$scope.addNote = function(newNote) {

		// console.log('newNote: ', newNote);
		var note = {};
		note.comment = newNote;
		note.place_id = $state.params.id;
		noteFactory.create(note).then(function(res) {

			$scope.init();
			$scope.comment = " ";
			// $scope.reset();

		}, function(err) {
			console.error('err: ', err);
		});
	};


	$scope.editNote = function(note) {
		$scope.listEd = angular.copy(note);
		console.log("scope listed: ", $scope.listEd)
	}

	$scope.cancelEditing = function() {
		$scope.listEd=undefined;
		$scope.newNote=undefined;
	}


	$scope.commitEdit = function(note) {
		console.log("note: ", note)
		noteFactory.update(note).then(function() {
			$scope.notes.splice($scope.notes.findIndex(e => e.note_id === note.note_id), 1, angular.copy(note));

			$('#edit-card-modal').modal('hide');
		});
	}


	$scope.removeNote = function(id) {
		// console.log("note: ", note)
		noteFactory.remove(id)
		.then(function(note) {
			
				// $scope.notes = res.data;
			  $scope.init();
			
		}, function(err) {
			console.error(err)
		});
	}


})

