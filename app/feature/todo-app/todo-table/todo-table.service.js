(function() {
    'use strict';

    angular.module('todoApp')
        .factory('todoTableService', todoTableService);

    function todoTableService($rootScope, $filter) {
        return {
            getTodoItems,
            indexOfItem,
            editItem,
            removeItem,
            showRemoveAllCompleted,
            removeAllCompleted,
            sortBy,
            setPaging,
            toStartPage,
            getSkipCount,
            getLimit,
            getItems,
            setSearchFilter,
            getSearch,
            setTableConfig,
            getColumns,
            isVisibleColumn,
            updateColumns
        };

        function getTodoItems() {
            return this.todoApp.getTodoItems();
        }

        function indexOfItem(item) {
            return this.todoApp.indexOfItem(item);
        }

        function editItem(item) {
            $rootScope.$emit('editItem', item);
        }

        function removeItem(item) {
            this.todoApp.removeItem(item);
        }

        function showRemoveAllCompleted() {
            return this.todoApp.completeCount() > 0;
        }

        function removeAllCompleted() {
            this.todoApp.removeAllCompleted();
        }

        function sortBy(sortName) {
            this.reverse = (this.property === sortName) ? !this.reverse : false;
            this.property = sortName;
        }

        function setPaging(paging) {
            this.paging = paging;
        }

        function toStartPage() {
            if (!this.paging) {
                return;
            }
            this.paging.toStartPage();
        }

        function getSkipCount() {
            return !this.paging ? 0 : this.paging.getSkipCount();
        }

        function getLimit() {
            return !this.paging ? 0 : this.paging.getLimit();
        }

        function getItems() {
            let items = this.todoApp.getTodoItems();

            items = $filter('checkedItems')(items, this.showComplete);
            items = $filter('filter')(items, this.searchText);

            return items;
        }

        function setSearchFilter(searchFilter) {
            this.searchFilter = searchFilter;
        }

        function getSearch() {
            return !this.searchFilter ? '' : this.searchFilter.getSearch();
        }

        function setTableConfig(tableConfig) {
            this.tableConfig = tableConfig;
            this.columns = this.getColumns();
        }

        function getColumns() {
            return !this.tableConfig ? '' : this.tableConfig.getTableColumns();
        }

        function isVisibleColumn(column) {
            return !this.tableConfig ? '' : this.tableConfig.isVisibleColumn(column);
        }

        function updateColumns(columns) {
            this.columns = columns;
        }
    }

})();
