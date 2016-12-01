(function() {
    'use strict';

    angular.module('components')
        .controller('Paging', Paging);

    function Paging() {
        let $ctrl = this;

        $ctrl.currentPage = 0;
        $ctrl.limit = 3;

        $ctrl.$onInit = function() {
            $ctrl.taskList.setPaging($ctrl);
        };

        $ctrl.hasNextPage = hasNextPage;
        $ctrl.toStartPage = toStartPage;
        $ctrl.getSkipCount = getSkipCount;
        $ctrl.getLimit = getLimit;

        function hasNextPage(tasks) {
            return $ctrl.taskList.filterTasks(tasks).length - (this.currentPage + 1) * this.limit > 0;
        }

        function toStartPage() {
            this.currentPage = 0;
        }

        function getSkipCount() {
            return this.currentPage * this.limit;
        }

        function getLimit() {
            return this.limit;
        }
    }

})();