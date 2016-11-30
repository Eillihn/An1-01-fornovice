(function() {

    angular.module('users')
        .service('userFormService', userFormService);

    function userFormService(usersService, $stateParams, $location, $state) {
        return {
            saveItem,
            resetForm,
            getUserId
        };

        function saveItem(item) {
            if (item && item.name) {
                let itemIndex = usersService.indexOfItem(this.editedItem);

                if (itemIndex > -1) {
                    usersService.replaceUser(itemIndex, item);
                } else {
                    usersService.addUser(item);
                }
            }
            $location.path('/users');
        }

        function resetForm() {
            $state.reload();
        }

        function getUserId() {
            return parseInt($stateParams['userId']);
        }
    }

})();