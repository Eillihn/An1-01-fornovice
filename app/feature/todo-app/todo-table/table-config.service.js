(function() {
    'use strict';

    angular.module('todoTable')
        .factory('tableConfigService', tableConfigService);

    function tableConfigService($window, $filter, tableColumns) {
        let columns = getTableColumns();
        if (!columns) {
            columns = tableColumns;
        }
        setTableColumns(columns);

        return {
            setTableColumns,
            getTableColumns,
            isVisibleColumn
        };

        function setTableColumns(columns) {
           var columnsJson = JSON.stringify(columns);
           $window.localStorage.setItem('table-columns', columnsJson);
           return this;
        }

        function getTableColumns() {
           var columnsJson = $window.localStorage.getItem('table-columns');
           return JSON.parse(columnsJson);
        }

        function isVisibleColumn(fieldName, tableColumns) {
            return $filter('filter')(tableColumns, {
                name: fieldName,
                visible: true
            }).length > 0;
        }
    }

})();
