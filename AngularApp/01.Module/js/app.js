(function() {
    'use strict';
    
    angular
        .module('MyApp',[])
        .constant('VERSION','1')
        .run(run);
        run.$inject = ['VERSION'];
        function run(VERSION){
            alert(VERSION);
        }
})();