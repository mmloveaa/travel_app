'use strict';

var app = angular.module('travelApp', ['ui.router', 'ngAnimate','ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {url:'/', templateUrl :'/html/home.html'})
		.state('list', {url:'/list', templateUrl :'/html/list.html', controller:"listCtrl"})
		// .state('detail', {url:'/detail', templateUrl :'/html/detail.html', controller:"detailCtrl"})
		// .state('detail', {url:'/detail', templateUrl :'/html/detail.html', controller:"dsetailCtrl"})
    $urlRouterProvider.otherwise('/');
});