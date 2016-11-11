(function() {
    'use strict';

    angular.module('commonServices')
        .factory('randomGeneratorService', randomGeneratorService);

    function randomGeneratorService(randomSource) {

        return {
            generate
        };

        function generate(n) {
            let result = '';

            for (var i = 0; i < n; i++) {
                var index = Math.floor(Math.random() * randomSource.length);
                result += randomSource.substring(index, index + 1);
            }

            return result;
        }
    }

})();
