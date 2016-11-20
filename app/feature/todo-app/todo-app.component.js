(function() {
    'use strict';

    angular.module('todoApp')
        .component('todoApp', {
            controller: 'TodoApp',
            transclude: true,
            template: '<div class="container" ng-transclude></div>'
        });

})();
