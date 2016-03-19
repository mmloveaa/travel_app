'use strict';

var app = angular.module('travelApp');

app.factory('ListFactory', function ($http) {
	return {
		fetch: 	function() {
			return $http.get('/list');
		},
		create:	function(newPlace) {
			return $http.post('/list',newPlace);
		},
		remove:	function(selectedPlace) {
			var url = `/list/${selectedPlace}`;
			return $http.delete(url);		//	promise
		},
		update:	function(place) {
			var url = `/list/${place.place_id}`;
			return $http.put(url, place);
		}
	}
});


app.factory('noteFactory', function ($http) {
	return {
		fetch: 	function(id) {
			return $http.get(`/detail/${id}`);
		},
		create:	function(newNote) {
			return $http.post('/detail',newNote);
		},
		remove:	function(id) {
			// console.log(selectedNote)
			var url = `/detail/${id}`;
			console.log(url)
			return $http.delete(`/detail/${id}`);		//	promise
		},
		update:	function(note) {
			var url = `/detail/${note.note_id}`;
			return $http.put(url, note);
		}
	}
});

