(function() {
    'use strict';

    angular.module('tasks')
        .factory('todoTableService', todoTableService);

    function todoTableService($location, $filter, $routeParams) {
        return {
            indexOfItem,
            go,
            removeTask,
            showRemoveAllCompleted,
            removeAllCompleted,
            sortBy,
            setPaging,
            toStartPage,
            getSkipCount,
            getLimit,
            getTasks,
            setSearchFilter,
            getSearch,
            setTableConfig,
            getColumns,
            isVisibleProperty,
            updateTaskProperties,
            getUserName
        };

        function indexOfItem(item) {
            return this.taskList.indexOfItem(item);
        }

        function go(path) {
            $location.path(path);
        }

        function removeTask(item) {
            this.taskList.removeTask(item);
        }

        function showRemoveAllCompleted() {
            return this.taskList.completeCount() > 0;
        }

        function removeAllCompleted() {
            this.taskList.removeAllCompleted();
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

        function getTasks() {
            let items = this.taskList.getTasks();

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
            return !this.tableConfig ? '' : this.tableConfig.getTaskProperties();
        }

        function isVisibleProperty(column) {
            return !this.tableConfig ? '' : this.tableConfig.isVisibleProperty(column);
        }

        function updateTaskProperties(columns) {
            this.columns = columns;
        }

        function getUserName(userId) {
            return this.taskList.getUserName(userId);
        }
    }

})();