(function() {
    'use strict';

    angular.module('users')
        .factory('deleteUserService', deleteUserService);

    function deleteUserService(usersService, tasksService, $filter, $stateParams, $location) {
        return {
            deleteUser,
            getUser,
            hasTasks
        };

        function deleteUser(user) {
            usersService.removeUser(user);
            $location.path('/users');
        }

        function getUser() {
            return usersService.getUser(parseInt($stateParams['userId']));
        }

        function hasTasks() {
            return tasksService.getTasks().length > 0;
        }

    }

})();