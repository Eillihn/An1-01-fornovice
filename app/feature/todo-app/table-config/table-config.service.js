(function() {
    'use strict';

    angular.module('todoApp')
        .factory('tableConfigService', tableConfigService);

    function tableConfigService($window, $filter, tableColumns) {
        let columns = getTableColumns();

        return {
            setTableColumns,
            getTableColumns,
            isVisibleColumn,
            updateColumns
        };

        function setTableColumns(columns) {
           var columnsJson = JSON.stringify(columns);
           $window.localStorage.setItem('table-columns', columnsJson);
           return this;
        }

        function getTableColumns() {
           var columnsJson = $window.localStorage.getItem('table-columns');
           return JSON.parse(columnsJson) || [];
        }

        function isVisibleColumn(fieldName) {
            return $filter('filter')(getTableColumns(), {
                name: fieldName,
                visible: true
            }).length > 0;
        }

        function updateColumns(columns) {
            setTableColumns(columns);
            this.todoTable.updateColumns(columns);
        }
    }

})();
