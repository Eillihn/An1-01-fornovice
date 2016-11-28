(function() {
    'use strict';

    angular.module('app', [
            'ngSanitize',
            'ui.router',
            'common',
            'feature'
        ])
        .constant('appName', 'TodoApp')
        .decorator('$log', todoAppLog);

    angular.element(document).ready(() => {
        angular.bootstrap(document, ['app']);
    });

})();