(function() {
    'use strict';

    angular.module('todoTable')
        .directive('todoTable', todoTable);

    function todoTable() {
        return {
            restrict: 'EA',
            templateUrl: '/feature/todo-table/todo-table.html'
        }
    }

})();
