(function() {
    'use strict';

    angular.module('components')
        .component('taskList', {
            controller: 'TaskList',
            templateUrl: './components/tasks/task-list/task-list.html',
            bindings: {
                tasks: '<',
                users: '<',
                user: '<',
                onUpdate: '&'
            }
        });

})();