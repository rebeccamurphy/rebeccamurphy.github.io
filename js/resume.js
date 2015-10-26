(function(){
	var resume = angular.module('resume',['ngRoute']);

    resume.controller('resumeController', function($scope) {
        $scope.message = 'resume';
       
    });
})();