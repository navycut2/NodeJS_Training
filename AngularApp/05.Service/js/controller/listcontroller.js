(function() {
    'use strict';
    
    angular
            .module('MyApp')
            .controller('listcontroller',listcontroller);

            listcontroller.$inject = ['$scope','$rootScope','$http','userservice'];

            function listcontroller($scope,$rootScope,$http,userservice)
            {
               $http
                    .get('./users.json')
                    .success(function(data){
                        $scope.users=data;
                    })
                    .error(function(err){
                        console.log(err);
                    });

                $scope.selectedUser = function (user) {                
                    console.log('in broadcast'+user);
                    userservice.setUser(user);
                    console.log('in broadcast'+user); 
                    $rootScope.$broadcast('userChanged');
                };
            }

            
        
})();