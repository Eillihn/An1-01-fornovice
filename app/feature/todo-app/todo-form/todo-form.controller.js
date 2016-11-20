(function() {
    'use strict';

    angular.module('todoForm')
        .controller('TodoForm', TodoForm);

    function TodoForm(model, $rootScope, todoFormService) {
        let $ctrl = this;

        Object.assign($ctrl, todoFormService);

        $rootScope.$on('editItem', function(events, editedItem) {
            $ctrl.editedItem = editedItem;
            $ctrl.newItem = Object.assign({}, editedItem);
        });
    }

})();
