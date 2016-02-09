app = angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            views: {
                '': {
                    templateUrl: './templates/start.html',
                    controller: 'homeController'
                    },
                'header@home': {
                    templateUrl: './templates/header.html',
                    controller: 'headerController'
                    },
                'footer@home': {
                    templateUrl: './templates/footer.html'
                    }
           },
           resolve: {
               sak: function(fabbe) {
                   return fabbe.getNames();
               }
           }
        })
        .state('about', {
            url: '/about',
            templateUrl: './templates/about.html'
        });
	
})
.factory('fabbe', function($q) {
    return {
        getNames: function() {
            return $q.when([{namn:'aaa'}, {namn:'bbb'}, {namn:'ccc'}]);
        }
    }
})
.controller('headerController', function($scope) {
    $scope.appNamn = 'HolaAmigos';
})
.controller('homeController', function($scope, sak) {
    $scope.folk=sak;
})
