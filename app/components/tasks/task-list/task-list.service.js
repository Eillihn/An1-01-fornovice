(function() {
    'use strict';

    angular.module('components')
        .factory('taskListService', taskListService);

    function taskListService($filter) {
        return {
            showRemoveAllCompleted,
            completeCount,
            getCompletedTodoItems,
            incompleteCount,
            getIncompletedTodoItems,
            setPaging,
            toStartPage,
            getSkipCount,
            getLimit,
            filterTasks,
            setSearchFilter,
            getSearch,
            setTableConfig,
            getColumns,
            isVisibleProperty,
            updateTaskProperties
        };

        function showRemoveAllCompleted(tasks) {
            return this.completeCount(tasks) > 0;
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

        function filterTasks(tasks) {
            let filteredTasks = $filter('checkedItems')(tasks, this.showComplete);

            return $filter('filter')(filteredTasks, this.searchText);
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

        function getCompletedTodoItems(tasks) {
            return $filter('filter')(tasks, {
                done: true
            });
        }

        function getIncompletedTodoItems(tasks) {
            return $filter('filter')(tasks, {
                done: false
            });
        }

        function incompleteCount(tasks) {
            return getIncompletedTodoItems(tasks).length;
        }

        function completeCount(tasks) {
            return getCompletedTodoItems(tasks).length;
        }
    }

})();