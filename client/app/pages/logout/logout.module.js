(function () {
	'use strict';
	var module = angular.module('app.pages.logout', [
		'ngRoute'
	])

	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/logout', {
				controller: 'LogoutController as logoutCtrl',
				templateUrl: 'app/pages/logout/logout.tpl.html'
			})
	}])
})()