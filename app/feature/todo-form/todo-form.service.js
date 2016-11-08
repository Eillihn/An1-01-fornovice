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
                    done: false
                }, newItem);

                if (angular.isDate(item.deadline)) {
                    item.deadline = item.deadline.getTime();
                }

                let itemIndex = items.indexOf(this.editedItem);
                if (itemIndex > -1) {
                    items.splice(itemIndex, 1, item);
                } else {
                    items.push(item);
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
