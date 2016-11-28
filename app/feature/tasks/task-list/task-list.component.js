(function() {
    'use strict';

    angular.module('tasks')
        .component('taskList', {
            controller: 'TaskList',
            templateUrl: './feature/tasks/task-list/task-list.html'
        });

})();