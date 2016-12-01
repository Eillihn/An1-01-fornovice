(function() {
    'use strict';

    angular.module('components')
        .component('deleteUser', {
            templateUrl: './components/users/delete-user/delete-user.html',
            controller: 'DeleteUser',
            bindings: {
                user: '<',
                userTasks: '<',
                onDelete: '&'
            }
        });

})();