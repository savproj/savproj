savApp.config(['$routeProvider','$stateProvider', '$urlRouterProvider', 
	function($routeProvider, $stateProvider, $urlRouterProvider){
		$stateProvider
		    .state('step1', {
		    	url: '/step_1',
		    	templateUrl: 'partials/create-vote.html'
		    }) 
		    .state('step2', {
			    url: '/step_2',
			    templateUrl: 'partials/config-vote.html',
				controller: 'ConfigVoteCtrl'
			}) 
			.state('step3', {
			    url: '/step_3',
			    templateUrl: 'partials/complete-vote.html',
				controller: 'CompleteVoteCtrl'
			})
		    .state('show', {
		      	url: '/show/:param',
		      	templateUrl: 'partials/show-vote.html'
		    });
	  
	  	// in home page or pagination
		$routeProvider.when('/', {
			templateUrl: 'partials/home.html',
		  	controller: 'HomeCtrl'
	    });

}]);