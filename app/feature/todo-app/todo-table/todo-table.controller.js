(function() {
    'use strict';

    angular.module('todoTable')
        .controller('TodoTable', TodoTable);

    function TodoTable(todoTableService, tableConfigService, todoItemsService) {
        let $ctrl = this;

        $ctrl.columns = tableConfigService.getTableColumns();
        $ctrl.currentPage = 0;
        $ctrl.limit = 5;

        Object.assign($ctrl, todoTableService);
        Object.assign($ctrl, todoItemsService);

        $ctrl.searchText = function (item) {
            if (!$ctrl.search) {
                return true;
            }

            let iAction = item.action.toLowerCase();
            let iResponsible = item.responsible.toLowerCase();
            let search = ('' + $ctrl.search).toLowerCase();

            return iAction.indexOf(search) > -1 || iResponsible.indexOf(search) > -1;
        }
    }

})();
