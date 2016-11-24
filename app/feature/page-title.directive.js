(function() {
    'use strict';

    angular.module('feature')
        .directive('pageTitle', pageTitle);

    function pageTitle() {
        return {
            restrict: 'A',
            template: `{{::$ctrl.user}}'s TO DO List`,
            controllerAs: '$ctrl',
            controller: function(model) {
                let $ctrl = this;

                $ctrl.user = model.user;
            }
        }
    }
})();
