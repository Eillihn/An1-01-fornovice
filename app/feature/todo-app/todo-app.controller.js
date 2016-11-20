(function() {
    'use strict';

    angular.module('todoApp')
        .controller('TodoApp', TodoApp);

    function TodoApp(model, todoItemsService) {
        let $ctrl = this;

        $ctrl.todo = model;

        Object.assign($ctrl, todoItemsService);
    }

})();
