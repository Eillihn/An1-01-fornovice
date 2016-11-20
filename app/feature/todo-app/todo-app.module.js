(function() {
    'use strict';

    angular.module('todoApp', [])
        .run(runTodoApp)
        .value('model', {
            'user': 'Vitaliy',
            'userPhoto': 'images/VZ.jpg'
        });

    function runTodoApp($http, todoItemsService) {
        $http.get('todo.json').then((response) => todoItemsService.setTodoItems(response.data));
    }

})();
