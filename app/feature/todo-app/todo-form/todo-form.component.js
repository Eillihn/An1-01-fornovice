(function() {
    'use strict';

    angular.module('todoApp')
        .component('todoForm', {
            templateUrl: 'feature/todo-app/todo-form/todo-form.html',
            controller: 'TodoForm',
            require: {
                'todoApp': '^'
            }
        });

})();
