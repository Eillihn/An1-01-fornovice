(function() {
    'use strict';

    angular.module('tasks')
        .controller('TaskForm', TaskForm);

    function TaskForm(todoFormService, tasksService) {
        let $ctrl = this;
        Object.assign($ctrl, todoFormService);

        $ctrl.editedItem = tasksService.getTask($ctrl.getTaskId());
        $ctrl.newItem = Object.assign({}, $ctrl.editedItem);
        $ctrl.user = {
            id: $ctrl.newItem.userId
        };
    }

})();