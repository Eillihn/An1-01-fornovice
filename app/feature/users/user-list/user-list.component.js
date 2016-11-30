(function() {
    'use strict';

    angular.module('users')
        .component('userList', {
            templateUrl: './feature/users/user-list/user-list.html',
            controller: 'UserList'
        });

})();