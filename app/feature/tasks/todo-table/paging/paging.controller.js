(function() {
    'use strict';

    angular.module('tasks')
        .controller('Paging', Paging);

    function Paging(pagingService) {
        let $ctrl = this;

        $ctrl.currentPage = 0;
        $ctrl.limit = 5;

        Object.assign($ctrl, pagingService);

        $ctrl.$onInit = function() {
            $ctrl.todoTable.setPaging($ctrl);
        };
    }

})();