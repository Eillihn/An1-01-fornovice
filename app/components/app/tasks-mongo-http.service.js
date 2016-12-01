(function() {
	'use strict';

	angular
		.module('components')
		.config(configModule)
		.factory('tasksSrv', tasksSrv);


	function configModule($httpProvider) {
		$httpProvider.interceptors.push('mongoAPIInterceptor');
	}

	function tasksSrv($http, $q, mongoLab) {
	    let TASKS_URL = `https://api.mlab.com/api/1/databases/${mongoLab.databaseName}/collections/tasks/`;

		return {
			getTaskById,
			getTasks,
			getUserTasks,
			createTask,
			deleteTask,
			updateTask,
			updateTasks
		};

		function sendResponseData(response) {
			return response.data;
		}

        function getId(data) {
            return data._id.$oid;
        }

		function getTasks() {
			return $http({
                    url: TASKS_URL,
                    method: 'GET'
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not retrive data from server.`);
                });
		}


		function createTask(newTask) {
			return $http({
                    url: TASKS_URL,
                    method: 'POST',
                    data: newTask
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not create data on server.`);
                });
		}


		function deleteTask(taskToDelete) {
			return $http({
                    url: TASKS_URL + getId(taskToDelete),
                    method: 'DELETE'
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not remove data on server.`);
                });
		}

		
		function getTaskById(taskId) {
			return $http({
                    url: TASKS_URL + taskId,
                    method: 'GET'
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not get data on server.`);
                });
		}


		function updateTask(taskToUpdate) {
			return $http({
                    url: TASKS_URL + getId(taskToUpdate),
                    method: 'PUT',
                    data: taskToUpdate
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not put data on server.`);
                });
		}

		function updateTasks(tasks) {
		    let filteredTasks = [];
		    angular.forEach(tasks, (task) => {
		        let pTask = Object.assign(task);
		        delete pTask.$$hashKey;
		        filteredTasks.push(pTask);
		    });

			return $http({
                    url: TASKS_URL,
                    method: 'PUT',
                    data: JSON.stringify(filteredTasks)
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not put data on server.`);
                });
		}

		function getUserTasks(userId) {
			return $http({
                    url: TASKS_URL,
                    method: 'GET'
                })
                .then(sendResponseData)
                .catch((response) => {
                    return $q.reject(`Error: can not get data on server.`);
                });

            function sendResponseData(response) {
                let userTasks = response.data.filter((task) => {
                    return task.userId === userId;
                });
                return userTasks;
            }
		}
	}

})();