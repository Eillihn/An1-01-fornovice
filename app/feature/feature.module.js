(function() {
    'use strict';

    angular.module('feature', [
            'pageHeader',
            'todoForm',
            'todoTable'
        ])
        .run(runFeature)
        .value('model', {
            'user': 'Vitaliy',
            'userPhoto': 'images/VZ.jpg'
        });

    function runFeature($http, todoItemsService) {
        $http.get('todo.json').then((response) => todoItemsService.setTodoItems(response.data));
    }

})();
