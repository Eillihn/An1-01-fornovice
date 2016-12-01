(function() {
    'use strict';

    angular.module('components')
        .controller('App', App);

    function App(usersSrv, tasksSrv) {
        let $ctrl = this;

        Object.assign($ctrl, usersSrv);
        Object.assign($ctrl, tasksSrv);
    }

})();