(function() {
    'use strict';

    angular.module('components')
        .controller('TaskList', TaskList);

    function TaskList(taskListService, $state, stateRouter) {
        let $ctrl = this;

        Object.assign($ctrl, taskListService);

        $ctrl.showComplete = true;
        $ctrl.updateTasks = updateTasks;
        $ctrl.searchText = searchText;
        $ctrl.navigate = stateRouter.navigate;

        function updateTasks(tasks) {
            $ctrl.onUpdate({tasks});
            $state.go('home');
        }

        function searchText(item) {
            let search = $ctrl.getSearch();
            if (!search) {
                return true;
            }

            let iAction = !item.action ? '' : item.action.toLowerCase();
            let iResponsible = !item.responsible ? '' : item.responsible.toLowerCase();
            search = ('' + search).toLowerCase();

            return iAction.indexOf(search) > -1 || iResponsible.indexOf(search) > -1;
        }
    }

})();