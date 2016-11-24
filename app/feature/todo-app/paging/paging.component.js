(function() {
    'use strict';

    angular.module('todoApp')
        .component('paging', {
            templateUrl: 'feature/todo-app/paging/paging.html',
            controller: 'Paging',
            require: {
                'todoTable': '^'
            }
        });

})();
