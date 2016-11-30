(function() {
    'use strict';

    angular.module('tasks')
        .component('paging', {
            templateUrl: 'feature/tasks/todo-table/paging/paging.html',
            controller: 'Paging',
            require: {
                'todoTable': '^'
            }
        });

})();