(function() {
    'use strict';

    angular.module('commonDirectives')
        .directive('datePicker', datePicker);

    function datePicker() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                let dateFormat = attrs['datePicker'];

                $(element).datepicker({
                    dateFormat,
                    onSelect: (date) => {
                        ctrl.$setViewValue(date);
                    }
                });
            }
        }
    }

})();
