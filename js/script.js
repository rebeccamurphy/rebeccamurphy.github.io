(function(){
	var app = angular.module('website',['ngRoute', 'resume']);

	app.controller('mainController', function($scope){
		$scope.message ="main page";
	
	});	
	app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
        $scope.bio = ["I recently graduated with a BS in Computer Science. Currently, I work for Fidelity "
        +"I'm living in Raleigh, NC until mid-December. I grew up in Long Island, NY and went to school at "
        +"Marist College in Poughkeepsie, NY.",

        "I have traveled around a bit, I've backpacked in England, France, Ireland, Scotland. I've lived "
        +"in serveral states. "


        ];
        $scope.path ="imgs/me.jpg";
    });

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
    app.controller('projectsController', function($scope) {
        $scope.message = 'projects';
    });
    
	// configure our routes
    app.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            // route for the contact page
            .when('/projects', {
                templateUrl : 'pages/projects.html',
                controller  : 'projectsController'
            })
            .when('/resume', {
                templateUrl : 'pages/resume.html',
                controller  : 'resumeController'
            });
    });

})();