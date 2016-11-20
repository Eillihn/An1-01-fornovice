(function() {
    'use strict';

    angular.module('todoTable')
        .factory('todoTableService', todoTableService);

    function todoTableService($rootScope, todoItemsService, $filter) {
        return {
            editItem,
            showRemoveAllCompleted,
            removeAllCompleted,
            sortBy,
            hasNextPage
        };

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

        function hasNextPage(displayedItems, currentPage, limit) {
            return displayedItems.length - (currentPage + 1) * limit > 0;
        }
    }

})();
