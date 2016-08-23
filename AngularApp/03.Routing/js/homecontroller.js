(function() {
    'use strict';
    
    angular
            .module('MyApp')
            .controller('HomeCtrl',HomeCtrl);

            HomeCtrl.$inject = ['$scope'];
            function HomeCtrl($scope){
                $scope.title = "Hello There";
                $scope.description = function() {
                    return 'this is the home page';
                };

            }
        
})();