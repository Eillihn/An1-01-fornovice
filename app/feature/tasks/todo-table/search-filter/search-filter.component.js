(function() {
    'use strict';

    angular.module('tasks')
        .component('searchFilter', {
            templateUrl: 'feature/tasks/todo-table/search-filter/search-filter.html',
            controller: 'SearchFilter',
            require: {
                'todoTable': '^'
            }
        });

})();