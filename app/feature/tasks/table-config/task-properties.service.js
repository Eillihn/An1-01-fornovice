(function() {
    'use strict';

    angular.module('tasks')
        .factory('taskPropertiesService', taskPropertiesService);

    function taskPropertiesService($window, $filter, $http, $q) {
        const TASK_PROPS = 'task-properties';
        let properties = [];

        return {
            getData,
            setTaskProperties,
            getTaskProperties,
            isVisibleProperty,
            updateTaskProperties
        };

        function setTaskProperties(propertiesStorage) {
            let propertiesJson = JSON.stringify(propertiesStorage);
            $window.localStorage.setItem(TASK_PROPS, propertiesJson);
            properties = propertiesStorage;
        }

        function getTaskProperties() {
            let propertiesJson = $window.localStorage.getItem(TASK_PROPS);
            return JSON.parse(propertiesJson) || [];
        }

        function isVisibleProperty(fieldName) {
            return $filter('filter')(getTaskProperties(), {
                name: fieldName,
                visible: true
            }).length > 0;
        }

        function updateTaskProperties(properties) {
            setTaskProperties(properties);
            this.todoTable.updateTaskProperties(properties);
        }

        function getData() {
            return $q.when(getTaskProperties())
                .then((propertiesStorage) => {
                    if (!propertiesStorage || !propertiesStorage.length) {
                        return $http.get('./data/task-properties.json');
                    } else {
                        properties = propertiesStorage;
                    }
                })
                .then(onSuccess)
                .catch(onError);

            function onSuccess(response) {
                if (!!response) {
                    setTaskProperties(response.data);
                }
            }

            function onError(response) {
                return $q.reject(response.data);
            }

        }
    }

})();