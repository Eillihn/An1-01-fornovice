(function() {

    angular.module('components')
        .controller('UserForm', UserForm);

    function UserForm($state) {
        var $ctrl = this;

        $ctrl.newUser = Object.assign({}, $ctrl.user);

        $ctrl.saveUser = saveUser;
        $ctrl.resetForm = resetForm;

        function saveUser(user) {
            $ctrl.onSave({user}).then(() => $state.go('users')).catch((error) => console.log(error));
        }

        function resetForm() {
            $state.reload();
        }
    }

})();