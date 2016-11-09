(function() {
    'use strict';

    angular.module('todoTable')
        .controller('TodoTable', TodoTable);

    function TodoTable(todoTableService) {
        let $ctrl = this;
        $ctrl.reverse = false;
        $ctrl.sortName = 'action';
        Object.assign($ctrl, todoTableService);
    }

})();
