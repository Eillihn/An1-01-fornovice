(function() {
    'use strict';

    angular.module('feature')
        .factory('todoItemsService', todoItemsService);

    function todoItemsService(model, $filter) {
        return {
            getTodoItems,
            setTodoItems,
            getCompletedTodoItems,
            getIncompletedTodoItems
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
    }
})();
