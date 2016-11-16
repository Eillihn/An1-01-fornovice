(function() {
    'use strict';

    angular.module('todoTable')
        .factory('todoTableService', todoTableService);

    function todoTableService($rootScope, todoItemsService, $filter) {
        return {
            removeItem,
            editItem,
            showRemoveAllCompleted,
            removeAllCompleted,
            sortBy,
            indexOfTodoItem,
            getTodoItems,
            hasNextPage
        };

        function removeItem(item) {
            todoItemsService.removeItem(item);
        }

        function editItem(item) {
            $rootScope.$emit('editItem', item);
        }

        function showRemoveAllCompleted() {
            return todoItemsService.getCompletedTodoItems().length > 0;
        }

        function removeAllCompleted() {
            let items = todoItemsService.getTodoItems();
            let completedItems = todoItemsService.getCompletedTodoItems();

            angular.forEach(completedItems, (item) => {
                todoItemsService.removeItem(item);
            });
        }

        function sortBy(sortName) {
            this.reverse = (this.property === sortName) ? !this.reverse : false;
            this.property = sortName;
        }

        function getTodoItems(item) {
            return todoItemsService.getTodoItems();
        }

        function indexOfTodoItem(item) {
            return todoItemsService.indexOfItem(item);
        }

        function hasNextPage(showComplete, search, currentPage, limit) {
            let displayedItems = $filter('checkedItems')(getTodoItems(), showComplete);
            if (!!search) {
                displayedItems = $filter('filter')(displayedItems, search.responsible);
                displayedItems = $filter('filter')(displayedItems, search.action);
            }
            return displayedItems.length - (currentPage + 1) * limit > 0;
        }
    }

})();
