(function() {
	var app = angular.module('app', []);

	// app.config(function($routeProvider) {
 //    $routeProvider
 //    // route for the home page
 //    // .when('/', {
 //    //     templateUrl : 'index.html',
 //    //     controller  : 'QuestionController'
 //    // })

 //    // .when('/about', {
 //    //     templateUrl : 'pages/about.html',
 //    //     controller  : 'QuestionController'
 //    // })

 //    // // route for the contact page
 //    // .when('/contact', {
 //    //     templateUrl : 'pages/contact.html',
 //    //     controller  : 'QuestionController'
 //    // });
 // });

	app.controller('QuestionController', function($scope, $http, $window) {

	  $scope.questionCounter = 0;
	  $scope.answerCounter = 0;
	  $scope.questions = [
			'You are one of the hardest working people I know...',
			'...at being a troll.',
			'Your ability to focus is unmatched...',
			'Especially when it\'s time to relax.',
			'I miss your goofy grin,',
			'And I\'m rushing home to see you again.',
			'Seems like only yesterday you were learning how to brush your teeth,',
			'Before I know it you\'ll be graduated, with a lot of cavities.'
		];

		$scope.photos = [
			"kayaking.jpg",
			"disney.jpg",
			"restaurant.jpg",
			"grin.jpg",
			"troll.jpg",
			"car.jpg",
			"brushteeth.jpg",
			"graduationcap.jpg"
		];

		$scope.goToQuestions = function() {
			console.log('go to questions got called');
			$window.location.href = "/questions.html";
		}

		$scope.question = $scope.questions[$scope.questionCounter];
		$scope.photo = $scope.photos[$scope.questionCounter];

	  $scope.nextQuestion = function() {
	  	$scope.questionCounter++;
	  	if($scope.questionCounter === $scope.questions.length) {
	  		$scope.displayAnswer();
	  	} else {
	  		$scope.question = $scope.questions[$scope.questionCounter];
	  		$scope.photo = $scope.photos[$scope.questionCounter];
	  		console.log($scope.question);
	  		console.log($scope.photo);
	  	}
	  };

	  $scope.incrementAnswer = function() {
	  	$scope.answerCounter++;
	  };

	  $scope.displayAnswer = function() {
			$scope.answers = [
				'Happy Birthday, my dear brother! I love you.',
				'Happy Birthday, my dear brother! I love you.',
		  ];

	  	if ($scope.answerCounter < $scope.questions.length/2) {
	  		alert($scope.answers[1]);
	  	} else if ($scope.answerCounter >= $scope.questions.length/2) {
	  		alert($scope.answers[0]);
	  	}
		}
	});

})();


