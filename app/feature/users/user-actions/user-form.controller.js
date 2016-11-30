(function() {

    angular.module('users')
        .controller('UserForm', UserForm);

    function UserForm(userFormService, usersService) {
        var $ctrl = this;

        Object.assign($ctrl, userFormService);

        $ctrl.editedItem = usersService.getUser($ctrl.getUserId());
        $ctrl.newItem = Object.assign({}, $ctrl.editedItem);
    }

})();