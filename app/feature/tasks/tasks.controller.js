(function() {
    'use strict';

    angular.module('tasks')
        .controller('TaskList', TaskList);

    function TaskList(tasksService, tasksStorageService) {
        let $ctrl = this;

        Object.assign($ctrl, tasksService);
    }

})();