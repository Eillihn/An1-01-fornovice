(function() {
    'use strict';

    angular.module('todoApp')
        .factory('pagingService', pagingService);

    function pagingService() {
        return {
            hasNextPage,
            toStartPage,
            getSkipCount,
            getLimit
        };

        function hasNextPage() {
            let items  = this.todoTable.getItems();

            return items.length - (this.currentPage + 1) * this.limit > 0;
        }

        function toStartPage() {
            this.currentPage =  0;
        }

        function getSkipCount() {
            return this.currentPage * this.limit;
        }

        function getLimit() {
            return this.limit;
        }
    }

})();
