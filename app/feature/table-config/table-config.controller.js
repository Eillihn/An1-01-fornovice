(function() {
    'use strict';

    angular.module('tableConfig')
        .controller('TableConfig', TableConfig);

    function TableConfig(tableConfigService) {
        let $ctrl = this;
        $ctrl.columns = tableConfigService.getTableColumns();
        Object.assign($ctrl, tableConfigService);
    }

})();
