(function() {
    'use strict';

    angular.module('todoApp')
        .component('todoTable', {
            transclude: {
                'paging': 'paging',
                'searchFilter': 'searchFilter',
                'tableConfig': 'tableConfig'
            },
            templateUrl: 'feature/todo-app/todo-table/todo-table.html',
            controller: 'TodoTable',
            require: {
                'todoApp': '^'
            }
        });

})();
