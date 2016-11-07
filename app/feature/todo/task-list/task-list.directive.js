(function() {
    'use strict';

    angular.module('taskList')
        .directive('taskList', taskList);

    function taskList() {
        return {
            restrict: 'EA',
            templateUrl: '/feature/todo/task-list/table.html'
        }

    }
})();
