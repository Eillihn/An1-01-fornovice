(function() {
    'use strict';

    angular.module('pageHeader')
        .factory('pageHeaderService', pageHeaderService);

    function pageHeaderService($filter) {
        return {
            incompleteCount,
            warningLevel
        };

        function incompleteCount(items) {
            return angular.isArray(items) ? $filter('filter')(items, {
                done: false
            }).length : 0;
        }

        function warningLevel(items) {
            return incompleteCount(items) < 3 ? 'label-success' : 'label-warning';
        }
    }

})();
