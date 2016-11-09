(function() {
    'use strict';

    angular.module('pageHeader')
        .factory('pageHeaderService', pageHeaderService);

    function pageHeaderService(todoItemsService) {
        return {
            incompleteCount,
            warningLevel
        };

        function incompleteCount() {
            return todoItemsService.getIncompletedTodoItems().length;
        }

        function warningLevel() {
            return incompleteCount() < 3 ? 'label-success' : 'label-warning';
        }
    }

})();
