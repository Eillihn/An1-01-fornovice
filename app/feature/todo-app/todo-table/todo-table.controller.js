(function() {
    'use strict';

    angular.module('todoApp')
        .controller('TodoTable', TodoTable);

    function TodoTable(todoTableService) {
        let $ctrl = this;

        Object.assign($ctrl, todoTableService);

        $ctrl.searchText = function (item) {
            let search = $ctrl.getSearch();
            if (!search) {
                return true;
            }

            let iAction = !item.action ? '' : item.action.toLowerCase();
            let iResponsible = !item.responsible ? '' : item.responsible.toLowerCase();
            search = ('' + search).toLowerCase();

            return iAction.indexOf(search) > -1 || iResponsible.indexOf(search) > -1;
        }
    }

})();
