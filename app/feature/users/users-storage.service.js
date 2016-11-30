(function() {
    'use strict';

    angular.module('users')
        .factory('usersStorageService', usersStorageService);

    function usersStorageService($http, $q, $window) {
        const USERS_STORAGE = 'users';
        let users = [];

        return {
            getUsers,
            getStorageUsers,
            setUsers,
            getData
        };

        function getUsers() {
            return users;
        }

        function getStorageUsers() {
            let usersJson = $window.localStorage.getItem(USERS_STORAGE);
            return JSON.parse(usersJson) || [];
        }

        function setUsers(usersStorage) {
            let usersJson = JSON.stringify(usersStorage);

            $window.localStorage.setItem(USERS_STORAGE, usersJson);
            users = usersStorage;
        }

        function getData() {
            return $q.when(getStorageUsers())
                .then((usersStorage) => {
                    if (!usersStorage || !usersStorage.length) {
                        return $http.get('./data/users.json');
                    } else {
                        users = usersStorage;
                    }
                })
                .then(onSuccess)
                .catch(onError);

            function onSuccess(response) {
                if (!!response) {
                    setUsers(response.data);
                }
            }

            function onError(response) {
                return $q.reject(response.data);
            }
        }

    }
})();