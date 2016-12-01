(function() {
    'use strict';

    angular.module('components')
        .component('taskForm', {
            templateUrl: './components/tasks/edit-task/edit-task.html',
            controller: 'TaskForm',
            bindings: {
                task: '<',
                users: '<',
                onSave: '&'
            }
        });

})();