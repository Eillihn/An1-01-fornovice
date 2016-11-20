(function() {
    'use strict';

    angular.module('todoApp')
    .value("tableColumns", [{
            "name": "number",
            "visible": true
        },{
            "name": "id",
            "visible": false
        },{
            "name": "action",
            "visible": true
        },{
            "name": "done",
            "visible": true
        },{
            "name": "deadline",
            "visible": true
        },{
            "name": "responsible",
            "visible": true
        },{
            "name": "estimate",
            "visible": true
        },{
            "name": "commands",
            "visible": true
        }])
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
           return JSON.parse(columnsJson);
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
