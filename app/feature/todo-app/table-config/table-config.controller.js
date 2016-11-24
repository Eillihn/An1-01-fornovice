(function() {
    'use strict';

    angular.module('todoApp')
        .controller('TableConfig', TableConfig);

    function TableConfig(tableConfigService) {
        let $ctrl = this;

        $ctrl.columns = tableConfigService.getTableColumns();

        Object.assign($ctrl, tableConfigService);

        $ctrl.$onInit = function() {
            $ctrl.todoTable.setTableConfig($ctrl);
        };
    }

})();
