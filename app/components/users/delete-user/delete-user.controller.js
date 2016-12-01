(function() {

    angular.module('components')
        .controller('DeleteUser', DeleteUser);

    function DeleteUser($state) {
        let $ctrl = this;

        $ctrl.deleteUser = deleteUser;

        function deleteUser(user) {
            $ctrl.onDelete({user}).then(() => $state.go('users')).catch((error) => console.log(error));
        }
    }

})();