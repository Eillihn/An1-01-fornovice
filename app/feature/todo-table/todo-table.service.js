(function() {
    'use strict';

    angular.module('todoTable')
        .factory('todoTableService', todoTableService);

    function todoTableService($rootScope, todoItemsService) {
        return {
            removeItem,
            editItem,
            showRemoveAllCompleted,
            removeAllCompleted,
            sortBy,
            indexOfTodoItem,
            getTodoItems
        };

        function removeItem(item) {
            let items = todoItemsService.getTodoItems();
            let index = items.indexOf(item);
            if (item && index > -1) {
                items.splice(index, 1);
            }
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
                let index = items.indexOf(item);
                if (index > -1) {
                    items.splice(index, 1);
                }
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
            return getTodoItems().indexOf(item);
        }
    }

})();
