(function() {
    'use strict';

    angular.module('components')
        .component('todoHeader', {
            templateUrl: 'components/tasks/todo-header/todo-header.html',
            bindings: {
                user: '<',
                tasks: '<',
                incompleteCount: '&'
            }
        });

})();