(function() {
    'use strict';
    
    angular
            .module('MyApp')
            .controller('listcontroller',listcontroller);

            listcontroller.$inject = ['$scope','$http'];

            function listcontroller($scope,$http)
            {
               $http
                    .get('./users.json')
                    .success(function(data){
                        $scope.users=data;
                    })
                    .error(function(err){
                        console.log(err);
                    });

            }
        
})();