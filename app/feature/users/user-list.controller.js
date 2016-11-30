(function() {

    angular.module('users')
        .controller('UserList', UserList);

    function UserList(usersService) {
        var $ctrl = this;

        Object.assign($ctrl, usersService);
    }

})();