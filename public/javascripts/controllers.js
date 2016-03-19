'use strict';

var app = angular.module('travelApp');

app.controller('listCtrl', function ($scope, ListFactory, $state) {

	if (!$scope.newPlace) $scope.newPlace = {}

		ListFactory.fetch().then(function (res) {
		$scope.places = res.data;
	}, function(err) {
		console.log('err: ',err);
	});


	$scope.addCard = function(newPlace) {
		console.log('newPlace: ', newPlace);
		ListFactory.create(angular.copy(newPlace)).then(function(res) {
			$('#new-card-modal').modal('hide');
			var newPlaceCopy = angular.copy(newPlace);
			newPlaceCopy.place_id = res.data.insertId;
			$scope.places.push(newPlaceCopy);
			$scope.newPlace = undefined;
		}, function(err) {
			console.error('err: ', err);
		});
	};


	$scope.editList = function(place) {
		$scope.listEd = angular.copy(place);
	}

	$scope.cancelEditing = function() {
		$scope.listEd=undefined;
		$scope.newPlace=undefined;
	}

	$scope.commitEdit = function(place) {
		ListFactory.update(place).then(function() {
			$scope.places.splice($scope.places.findIndex(e => e.place_id === place.place_id), 1, angular.copy(place));
			$scope.place = undefined;
			$('#edit-card-modal').modal('hide');
		});
	}


	$scope.removeCard = function(place) {
		console.log("place: ", place)
		ListFactory.remove(place)
		.then(function(place) {
			ListFactory.fetch().then(function(res) {
				$scope.places = res.data;
			}, function(err) {
				console.error('err: ', err);
			});

		}, function(err) {
			console.error(err)
		});
	}


  $scope.goToDetail = function(id){
  	$state.go("detail" , {"id": id})
  }



})

