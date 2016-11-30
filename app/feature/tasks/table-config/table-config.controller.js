(function() {
    'use strict';

    angular.module('tasks')
        .controller('TableConfig', TableConfig);

    function TableConfig(taskPropertiesService) {
        let $ctrl = this;

        $ctrl.columns = taskPropertiesService.getTaskProperties();

        Object.assign($ctrl, taskPropertiesService);

        $ctrl.$onInit = function() {
            $ctrl.todoTable.setTableConfig($ctrl);
        };
    }

})();