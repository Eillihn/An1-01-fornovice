(function() {
    'use strict';

    angular.module('tasks')
        .factory('deleteTaskService', deleteTaskService);

    function deleteTaskService(tasksService, taskPropertiesService, $filter, $routeParams, $location) {
        return {
            deleteTask,
            getTask,
            getProperties
        };

        function deleteTask(task) {
            tasksService.removeTask(task);
            $location.path('/');
        }

        function getTask() {
            return tasksService.getTask(parseInt($routeParams['taskId']));
        }

        function getProperties() {
            let properties = taskPropertiesService.getTaskProperties();

            return $filter('filter')(properties, {
                editable: true
            });
        }
    }

})();