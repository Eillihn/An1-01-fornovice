(function() {
    'use strict';

    angular.module('todoTable')
        .controller('TodoTable', TodoTable);

    function TodoTable(todoTableService, tableConfigService) {
        let $ctrl = this;
        $ctrl.columns = tableConfigService.getTableColumns();
        $ctrl.currentPage = 0;
        $ctrl.limit = 5;
        Object.assign($ctrl, todoTableService);
    }

})();
