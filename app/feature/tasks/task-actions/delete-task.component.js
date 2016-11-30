(function() {
    'use strict';

    angular.module('tasks')
        .component('deleteTask', {
            templateUrl: './feature/tasks/task-actions/delete-task.html',
            controller: 'DeleteTask'
        });

})();