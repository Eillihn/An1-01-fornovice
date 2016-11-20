(function() {
    'use strict';

    angular.module('todoForm')
        .directive('todoForm', todoForm);

    function todoForm() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'feature/todo-app/todo-form/todo-form.html',
            controller: 'TodoForm',
            controllerAs: '$ctrl'
        }

    }
})();
