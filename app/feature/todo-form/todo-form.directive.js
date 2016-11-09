(function() {
    'use strict';

    angular.module('todoForm')
        .directive('todoForm', todoForm);

    function todoForm() {
        return {
            restrict: 'EA',
            templateUrl: '/feature/todo-form/todo-form.html'
        }

    }
})();
