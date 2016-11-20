(function() {
    'use strict';

    angular.module('commonDirectives')
        .directive('convertToDateString', convertToDate);

    function convertToDate() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                ctrl.$formatters.push((value = Date.now()) => {
                    let date = new Date(value);
                    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
                });
            }
        }
    }

})();
