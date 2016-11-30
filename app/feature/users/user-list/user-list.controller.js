(function() {

    angular.module('users')
        .controller('UserList', UserList);

    function UserList(usersService, stateRouter) {
        var $ctrl = this;

        Object.assign($ctrl, usersService);

        $ctrl.navigate = stateRouter.navigate;
    }

})();