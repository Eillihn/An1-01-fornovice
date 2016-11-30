(function() {
    'use strict';

    angular.module('tasks')
        .controller('DeleteTask', DeleteTask);

    function DeleteTask(deleteTaskService) {
        let $ctrl = this;

        Object.assign($ctrl, deleteTaskService);

        $ctrl.task = $ctrl.getTask();
        $ctrl.properties = $ctrl.getProperties();
    }

})();