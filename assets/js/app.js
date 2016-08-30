var javascriptquestionapp = angular.module("javascriptquestionapp", ['ngRoute', 'ngSanitize']);


javascriptquestionapp.config(['$routeProvider',
function($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl : 'templates/home/home.html',
		controller : 'home_ctrl'
	}).when('/variable', {
		templateUrl : 'topics/variable/variable.html',
		controller : 'variable_ctrl'
	}).when('/', {
		redirectTo : '/home'
	}).otherwise({
		redirectTo : '/home'
	});

}]);