(function() {
    'use strict';

    angular.module('components')
        .component('searchFilter', {
            templateUrl: 'components/tasks/task-list/search-filter/search-filter.html',
            controller: 'SearchFilter',
            require: {
                'taskList': '^'
            }
        });

})();