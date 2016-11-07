(function() {
    'use strict';

    angular.module('todo')
        .directive('todoListAdmin', todoListAdmin);

    function todoListAdmin() {
        return {
            restrict: 'E',
            templateUrl: '/feature/todo/todo.html'
        }

    }
})();
