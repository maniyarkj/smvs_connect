'use strict';

angular.module('smvsApp.masterModule.controllers', [])
	.controller('MemberProfileCtrl', function($scope, $rootScope)
	{
		var vm = this;

		// Collapsing All Nodes

		$scope.choices = [{id: 'choice1'}];

	  $scope.addNewChoice = function() {
	    var newItemNo = $scope.choices.length+1;
	    $scope.choices.push({'id':'choice'+newItemNo});
	  };

	  $scope.removeChoice = function() {
	    var lastItem = $scope.choices.length-1;
	    $scope.choices.splice(lastItem);
	  };
	});
