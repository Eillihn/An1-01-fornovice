(function() {
    'use strict';

    angular.module('tasks')
        .factory('deleteTaskService', deleteTaskService);

    function deleteTaskService(tasksService, usersService, taskPropertiesService, $filter, $stateParams, $location) {
        return {
            deleteTask,
            getTask,
            getProperties,
            getUserName
        };

        function deleteTask(task) {
            tasksService.removeTask(task);
            $location.path('/');
        }

        function getTask() {
            return tasksService.getTask(parseInt($stateParams['taskId']));
        }

        function getProperties() {
            let properties = taskPropertiesService.getTaskProperties();

            return $filter('filter')(properties, {
                editable: true
            });
        }

        function getUserName(userId) {
            return usersService.getUserName(userId);
        }
    }

})();