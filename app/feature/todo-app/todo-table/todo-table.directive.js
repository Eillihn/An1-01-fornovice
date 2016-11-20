(function() {
    'use strict';

    angular.module('todoTable')
        .directive('todoTable', todoTable);

    function todoTable() {
        return {
            restrict: 'E',
            templateUrl: 'feature/todo-app/todo-table/todo-table.html',
            controller: 'TodoTable',
            controllerAs: '$ctrl'
        }
    }

})();
