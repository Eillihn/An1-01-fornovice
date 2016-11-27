(function() {

    angular.module('users')
        .controller('DeleteUser', DeleteUser);

    function DeleteUser(deleteUserService) {
        var $ctrl = this;

        Object.assign($ctrl, deleteUserService);

        $ctrl.user = $ctrl.getUser();
    }

})();