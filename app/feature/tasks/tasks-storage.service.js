(function() {
    'use strict';

    angular.module('tasks')
        .factory('tasksStorageService', tasksStorageService);

    function tasksStorageService($http, $q, $window) {
        const TASKS_STORAGE = 'tasks';
        let tasks = [];

        return {
            getTasks,
            getStorageTasks,
            setTasks,
            getData
        };

        function getTasks() {
            return tasks;
        }

        function getStorageTasks() {
            let tasksJson = $window.localStorage.getItem(TASKS_STORAGE);
            return JSON.parse(tasksJson) || [];
        }

        function setTasks(tasksStorage) {
            let tasksJson = JSON.stringify(tasksStorage);

            $window.localStorage.setItem(TASKS_STORAGE, tasksJson);
            tasks = tasksStorage;
        }

        function getData() {
            return $q.when(getStorageTasks())
                .then((tasksStorage) => {
                    if (!tasksStorage || !tasksStorage.length) {
                        return $http.get('./data/tasks.json');
                    } else {
                        tasks = tasksStorage;
                    }
                })
                .then(onSuccess)
                .catch(onError);

            function onSuccess(response) {
                if (!!response) {
                    setTasks(response.data);
                }
            }

            function onError(response) {
                return $q.reject(response.data);
            }
        }

    }
})();