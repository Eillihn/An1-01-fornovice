(function() {
    'use strict';

    angular.module('components')
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
            return this.taskList.toStartPage();
        }
    }

})();