(function() {
    'use strict';

    angular.module('todoApp')
        .component('tableConfig', {
            templateUrl: 'feature/todo-app/table-config/table-config.html',
            controller: 'TableConfig',
            require: {
                'todoTable': '^'
            }
        });

})();
