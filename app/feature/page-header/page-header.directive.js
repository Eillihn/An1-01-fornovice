(function() {
    'use strict';

    angular.module('pageHeader')
        .directive('pageHeader', pageHeader);

    function pageHeader() {
        return {
            restrict: 'EA',
            templateUrl: '/feature/page-header/page-header.html'
        }
    }
})();
