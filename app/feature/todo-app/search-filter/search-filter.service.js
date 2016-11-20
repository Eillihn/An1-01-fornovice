(function() {
    'use strict';

    angular.module('todoApp')
        .factory('searchFilterService', searchFilterService);

    function searchFilterService() {
        return {
            getSearch,
            toStartPage
        };

        function getSearch() {
            return this.search;
        }

        function toStartPage() {
            return this.todoTable.toStartPage();
        }
    }

})();
