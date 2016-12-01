(function() {
    'use strict';

    angular.module('components')
        .component('deleteTask', {
            templateUrl: './components/tasks/delete-task/delete-task.html',
            controller: 'DeleteTask',
            bindings: {
                task: '<',
                user: '<',
                onDelete: '&'
            }
        });

})();