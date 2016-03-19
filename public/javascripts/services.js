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
		update:	function(selectedPlace) {
			var url = `/list/${selectedPlace}`;
			return $http.put(url);
		}
	}
});