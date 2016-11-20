(function() {
    'use strict';

    angular.module('todoApp')
        .factory('todoFormService', todoFormService);

    function todoFormService() {
        return {
            saveItem,
            cleanForm,
            getTomorrow
        };

        function saveItem(newItem) {
            let items = this.todoApp.getTodoItems();
            if (newItem && newItem.action) {
                let item = Object.assign({
                    done: false,
                    deadline: Date.now()
                }, newItem);

                item.deadline = new Date(item.deadline).getTime();

                let itemIndex = this.todoApp.indexOfItem(this.editedItem);
                if (itemIndex > -1) {
                    this.todoApp.replaceItem(itemIndex, item);
                } else {
                    this.todoApp.addItem(item);
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
