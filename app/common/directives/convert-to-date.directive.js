(function() {
    'use strict';

    angular.module('commonDirectives')
        .directive('convertToDate', convertToDate);

    function convertToDate() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                ctrl.$formatters.push(function(value) {
                    return new Date(value);
                });
            }
        }
    }

})();
