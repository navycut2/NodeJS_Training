(function() {
    'use strict';
    
    angular
            .module('MyApp')
            .factory('userservice',userservice);

            //listcontroller.$inject = ['$http'];

            function userservice($http)
            {
              var user;

              var serviceMethods = {
                  setUser: setCurrentUser,
                  getUser: getCurrentUser
              };

              return serviceMethods;

              function setCurrentUser(newUser) {
                  user = newUser;
              }

              function getCurrentUser() {
                  return user;
              }

            }
        
})();