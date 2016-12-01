(function() {
    'use strict';

    angular.module('components')
        .controller('DeleteTask', DeleteTask);

    function DeleteTask(tasksSrv, taskPropertiesService, $state, $filter) {
        let $ctrl = this;

        $ctrl.deleteTask = deleteTask;
        $ctrl.properties = getProperties();

        function deleteTask(task) {
            $ctrl.onDelete(task).then(() => $state.go('home')).catch((error) => console.log(error));
        }

        function getProperties() {
            let properties = taskPropertiesService.getTaskProperties();

            return $filter('filter')(properties, {
                editable: true
            });
        }
    }

})();