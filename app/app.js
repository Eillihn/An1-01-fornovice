(function() {
    'use strict';

    angular.module('app', ['ngSanitize', 'common', 'feature'])
        .run(runApp)
        .value('model', {
            'user': 'Vitaliy',
            'userPhoto': 'images/VZ.jpg'
        });

    angular.element(document).ready(() => {
        angular.bootstrap(document, ['app']);
    });

    function runApp($http, model) {
        $http.get('todo.json').then((response) => model.items = response.data);
    }

})();
