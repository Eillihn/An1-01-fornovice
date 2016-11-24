(function() {
    'use strict';

    angular.module('todoApp')
        .component('searchFilter', {
            templateUrl: 'feature/todo-app/search-filter/search-filter.html',
            controller: 'SearchFilter',
            require: {
                'todoTable': '^'
            }
        });

})();
