(function() {
    'use strict';

    angular.module('todoTable')
        .filter('checkedItems', checkedItems);

    function checkedItems() {
        return function(items, showComplete) {
            let result = [];

            if (angular.isArray(items)) {
                angular.forEach(items, (item) => {
                    if (!item.done || showComplete) {
                        result.push(item);
                    }
                });
                return result;
            } else {
                return items;
            }

        }
    }

})();
