(function() {
    'use strict';

    angular.module('todoApp')
        .directive('todoApp', todoApp);

    function todoApp() {
        return {
            restrict: 'A',
            controller: 'TodoApp',
            controllerAs: '$ctrl'
        }
    }
})();
