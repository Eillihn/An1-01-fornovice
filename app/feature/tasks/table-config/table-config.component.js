(function() {
    'use strict';

    angular.module('tasks')
        .component('tableConfig', {
            templateUrl: 'feature/tasks/table-config/table-config.html',
            controller: 'TableConfig',
            require: {
                'todoTable': '^'
            }
        });

})();