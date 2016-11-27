(function() {
    'use strict';

    angular.module('feature')
        .directive('pageTitle', pageTitle);

    function pageTitle() {
        return {
            restrict: 'A',
            template: `{{$ctrl.getUserName()}}TO DO List`,
            controllerAs: '$ctrl',
            controller: function($routeParams, usersService) {
                let $ctrl = this;

                $ctrl.getUserName = function() {
                    let userId = $routeParams['userId'];
                    return userId ? `${usersService.getUserName(userId)} + 's` : '';
                };
            }
        }
    }
})();