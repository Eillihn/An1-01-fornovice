(function() {
    'use strict';

    angular.module('components')
        .component('tableConfig', {
            templateUrl: 'components/tasks/task-list/table-config/table-config.html',
            controller: 'TableConfig',
            require: {
                'taskList': '^'
            }
        });

})();