(function() {
    'use strict';

    angular.module('todo')
        .controller('Todo', Todo);

    function Todo(model, todoService) {
        let $ctrl = this;
        $ctrl.todo = model;
        $ctrl.reverse = false;
        $ctrl.sortName = 'action';
        Object.assign($ctrl, todoService);
    }

})();
