(function() {
    'use strict';

    angular.module('tasks')
        .component('taskList', {
            controller: 'TaskList',
            transclude: true,
            template: '<div class="container" ng-transclude></div>'
        });

})();