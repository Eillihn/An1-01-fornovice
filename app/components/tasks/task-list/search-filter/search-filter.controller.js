(function() {
    'use strict';

    angular.module('components')
        .controller('SearchFilter', SearchFilter);

    function SearchFilter(searchFilterService) {
        let $ctrl = this;

        Object.assign($ctrl, searchFilterService);

        $ctrl.$onInit = function() {
            $ctrl.taskList.setSearchFilter($ctrl);
        };
    }

})();