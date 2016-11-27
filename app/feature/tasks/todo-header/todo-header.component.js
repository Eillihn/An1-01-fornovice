(function() {
    'use strict';

    angular.module('tasks')
        .component('todoHeader', {
            templateUrl: 'feature/tasks/todo-header/todo-header.html',
            require: {
                'taskList': '^'
            }
        });

})();