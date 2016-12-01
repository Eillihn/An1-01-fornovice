(function() {

    angular.module('commonServices')
        .service('stateRouter', stateRouter);

    function stateRouter($state) {
        this.navigate = function(state, params) {
            $state.go(state, params);
        };
    }

})();