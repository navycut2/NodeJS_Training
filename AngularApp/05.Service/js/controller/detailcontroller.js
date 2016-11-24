(function() {
    'use strict';
    
    angular
            .module('MyApp')
            .controller('detailcontroller',detailcontroller);

            detailcontroller.$inject = ['$rootScope','$scope','userservice'];

            function detailcontroller($rootScope,$scope,userservice)
            {
               $rootScope.$on('userChanged', function (event, data) {
                    console.log('in on '); 
                    console.log(data); // 'Data to send
                    var userData = userservice.getUser();
                    $scope.currentUser = userData;
                });

            }
        
})();