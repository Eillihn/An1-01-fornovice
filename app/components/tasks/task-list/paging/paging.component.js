(function() {
    'use strict';

    angular.module('components')
        .component('paging', {
            templateUrl: 'components/tasks/task-list/paging/paging.html',
            controller: 'Paging',
            require: {
                'taskList': '^'
            },
            bindings: {
                tasks: '<'
            }
        });

})();