(function() {
    'use strict';

    angular.module('todoApp')
        .factory('todoItemsService', todoItemsService);

    function todoItemsService(model, $filter) {
        return {
            getTodoItems,
            setTodoItems,
            getCompletedTodoItems,
            getIncompletedTodoItems,
            incompleteCount,
            completeCount,
            removeItem,
            replaceItem,
            addItem,
            indexOfItem,
            removeAllCompleted
        };

        function getTodoItems() {
            return model.items;
        }

        function setTodoItems(items) {
            model.items = items;
        }

        function getCompletedTodoItems() {
            return $filter('filter')(model.items, {
                done: true
            });
        }

        function getIncompletedTodoItems() {
            return $filter('filter')(model.items, {
                done: false
            });
        }

        function incompleteCount() {
            return getIncompletedTodoItems().length;
        }

        function completeCount() {
            return getCompletedTodoItems().length;
        }

        function removeItem(item) {
            let items = getTodoItems();
            let index = items.indexOf(item);
            if (item && index > -1) {
                items.splice(index, 1);
            }
        }

        function replaceItem(index, item) {
            let items = getTodoItems();
            items.splice(index, 1, item);
        }

        function addItem(item) {
            let items = getTodoItems();
            items.push(item);
        }

        function indexOfItem(item) {
            let items = getTodoItems();
            return items.indexOf(item);
        }

        function removeAllCompleted() {
            let items = getTodoItems();
            let completedItems = getCompletedTodoItems();

            angular.forEach(completedItems, (item) => {
                removeItem(item);
            });
        }

    }
})();
