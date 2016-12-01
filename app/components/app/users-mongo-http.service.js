(function() {
    'use strict';

    angular.module('components')
        .config(configModule)
        .factory('usersSrv', usersSrv)
        .factory('mongoAPIInterceptor', mongoAPIInterceptor);

    function mongoAPIInterceptor(mongoLab) {
        return {
            request: requestInterceptor
        };

        function requestInterceptor(config) {
            config.params = {
                apiKey: mongoLab.apiKey
            };

            return config;
        }
    }

    function configModule($httpProvider) {
        $httpProvider.interceptors.push('mongoAPIInterceptor');
    }

    function usersSrv($http, $q, mongoLab) {
        let USERS_URL = `https://api.mlab.com/api/1/databases/${mongoLab.databaseName}/collections/users/`;

        return {
            getUserById,
            getUsers,
            createUser,
            deleteUser,
            updateUser
        };
        
		function sendResponseData(response) {
			return response.data;
		}

        function getId(data) {
            return data._id.$oid;
        }
        
		function getUsers() {
			return $http({
                    url: USERS_URL,
                    method: 'GET'
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not retrive data from server.`);
                });
		}
		
		function createUser(newUser) {
			return $http({
                    url: USERS_URL,
                    method: 'POST',
                    data: newUser
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not create data on server.`);
                });
		}


		function deleteUser(userToDelete) {
			return $http({
                    url: USERS_URL + getId(userToDelete),
                    method: 'DELETE'
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not remove data on server.`);
                });
		}

		
		function getUserById(userId) {
			return $http({
                    url: USERS_URL + userId,
                    method: 'GET'
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not get data on server.`);
                });
		}


		function updateUser(userToUpdate) {
			return $http({
                    url: USERS_URL + getId(userToUpdate),
                    method: 'PUT',
                    data: userToUpdate
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not put data on server.`);
                });
		}
    }

})();