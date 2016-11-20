(function() {
    'use strict';

    angular.module('todoForm')
        .factory('todoFormService', todoFormService);

    function todoFormService(todoItemsService) {
        return {
            saveItem,
            cleanForm,
            getTomorrow
        };

        function saveItem(newItem) {
            let items = todoItemsService.getTodoItems();
            if (newItem && newItem.action) {
                let item = Object.assign({
                    done: false,
                    deadline: Date.now()
                }, newItem);

                item.deadline = new Date(item.deadline).getTime();

                let itemIndex = todoItemsService.indexOfItem(this.editedItem);
                if (itemIndex > -1) {
                    todoItemsService.replaceItem(itemIndex, item);
                } else {
                    todoItemsService.addItem(item);
                }
            }
            this.cleanForm();
        }

        function cleanForm() {
            this.newItem = {};
            this.editedItem = '';
        }

        function getTomorrow() {
            var newDate = new Date();
            return newDate.setDate(newDate.getDate() + 1);
        }
    }

})();
