(function() {
    'use strict';
    
    angular
            .module('MyApp')
            .controller('InfoCtrl',HomeCtrl);

            HomeCtrl.$inject = ['$scope'];
            function HomeCtrl($scope){
                $scope.infotitle = "Hello There Info";
               

            }
        
})();