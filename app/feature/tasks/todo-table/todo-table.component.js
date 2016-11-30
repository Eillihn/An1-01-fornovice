(function() {
    'use strict';

    angular.module('tasks')
        .component('todoTable', {
            transclude: {
                'paging': 'paging',
                'searchFilter': 'searchFilter',
                'tableConfig': 'tableConfig'
            },
            templateUrl: 'feature/tasks/todo-table/todo-table.html',
            controller: 'TodoTable',
            require: {
                'taskList': '^'
            },
            bindings: {
                'userId': '<'
            }
        });

})();