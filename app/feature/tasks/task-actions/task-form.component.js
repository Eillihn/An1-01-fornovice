(function() {
    'use strict';

    angular.module('tasks')
        .component('taskForm', {
            templateUrl: './feature/tasks/task-actions/task-form.html',
            controller: 'TaskForm',
        });

})();