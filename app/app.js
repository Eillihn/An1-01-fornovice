(function() {
    'use strict';

    angular.module('app', ['ngSanitize', 'common', 'feature']);

    angular.element(document).ready(() => {
        angular.bootstrap(document, ['app']);
    });

})();
