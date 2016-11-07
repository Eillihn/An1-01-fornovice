(function() {
    'use strict';

    angular.module('pageHeader')
        .controller('PageHeader', PageHeader);

    function PageHeader(model, pageHeaderService) {
        let $ctrl = this;
        $ctrl.todo = model;
        Object.assign($ctrl, pageHeaderService);
    }

})();
