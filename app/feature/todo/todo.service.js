(function() {
    'use strict';

    angular.module('todo')
        .factory('todoService', todoService);

    function todoService($filter) {
        return {
            saveItem,
            removeItem,
            editItem,
            cleanForm,
            showRemoveAllCompleted,
            removeAllCompleted,
            sortBy
        };

        function saveItem(items, newItem) {
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
                    items.push(newItem);
                }
            }

        }

        function removeItem(items, item) {
            let index = items.indexOf(item);
            if (item && index > -1) {
                items.splice(index, 1);
            }
        }

        function editItem(item) {
            this.editedItem = item;
            this.newItem = Object.assign({}, item);
        }

        function cleanForm() {
            this.editedItem = '';
            this.newItem = {};
        }

        function showRemoveAllCompleted(items) {
            let result = false;

            if (angular.isArray(items)) {
                let completeCount = $filter('filter')(items, {
                    done: true
                }).length;
                result = completeCount > 0;
            }
            return result;
        }

        function removeAllCompleted(items) {
            let completedItems = $filter('filter')(items, {
                done: true
            });
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
    }

})();
