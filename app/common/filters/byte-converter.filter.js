(function() {
    'use strict';

    angular.module('commonFilters')
        .filter('byteConverter', byteConverter);

    function byteConverter() {
        return function(input, convertTo) {
            let result = input;

            if (!angular.isString(convertTo) || !angular.isNumber(input)) {
                return result;
            }

            if (convertTo === 'kb') {
                result = input/1000;
            } else if (convertTo === 'Mb') {
                result = input/1000000;
            } else if (convertTo === 'Gb') {
                result = input/1000000000;
            }

            return result;
        };
    }

})();
