(function() {
    'use strict';

    angular.module('feature')
        .directive('pageTitle', pageTitle);

    function pageTitle() {
        return {
            restrict: 'A',
            template: `{{$ctrl.getUserName()}}TO DO List`,
            controllerAs: '$ctrl',
            controller: function($stateParams, usersService) {
                let $ctrl = this;

                $ctrl.getUserName = function() {
                    let userId = parseInt($stateParams['userId']);
                    return userId ? `${usersService.getUserName(userId)} + 's` : '';
                };
            }
        }
    }
})();