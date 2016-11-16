(function() {
    'use strict';

    angular.module('commonFilters')
        .filter('labelCase', labelCase);

    function labelCase() {
        return function(input) {
            if (!angular.isString(input)) {
                return input;
            }
            return angular.lowercase(input.replace(/([A-Z])/g, ' $1'));
        };
    }

})();
