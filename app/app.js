(function() {
    'use strict';

    angular.module('app', [
            'common',
            'ngSanitize',
            'ui.router',
            'components'
        ])
        .constant('appName', 'TodoApp')
        .decorator('$log', todoAppLog);

    angular.element(document).ready(() => {
        angular.bootstrap(document, ['app']);
    });

})();