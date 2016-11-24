(function() {
    'use strict';

    angular.module('todoApp')
        .controller('SearchFilter', SearchFilter);

    function SearchFilter(searchFilterService) {
        let $ctrl = this;

        Object.assign($ctrl, searchFilterService);

        $ctrl.$onInit = function() {
            $ctrl.todoTable.setSearchFilter($ctrl);
        };
    }

})();
