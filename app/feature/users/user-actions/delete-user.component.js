(function() {
    'use strict';

    angular.module('users')
        .component('deleteUser', {
            templateUrl: './feature/users/user-actions/delete-user.html',
            controller: 'DeleteUser'
        });

})();