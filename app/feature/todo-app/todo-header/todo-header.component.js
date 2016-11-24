(function() {
    'use strict';

    angular.module('todoApp')
        .component('todoHeader', {
            templateUrl: 'feature/todo-app/todo-header/todo-header.html',
            require: {
                'todoApp': '^'
            }
        });

})();
