(function() {
    'use strict';

    angular.module('pageHeader')
        .directive('pageHeader', pageHeader);

    function pageHeader() {
        return {
            restrict: 'EA',
            scope: {
                model: '=',
                incompleteCount: '&'
            },
            templateUrl: function(tElem, tAttrs) {
                let folder =  'feature/todo-app/page-header';

                return tAttrs['template'] === 'title' ? `${folder}/page-title.html` : `${folder}/page-header.html`;
            }
        }
    }
})();
