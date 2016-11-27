(function() {
    'use strict';

    angular.module('tasks')
        .factory('todoFormService', todoFormService);

    function todoFormService(tasksService, usersService, $routeParams, $location, $route) {
        return {
            saveItem,
            resetForm,
            getTaskId,
            getUsers
        };

        function saveItem(newItem, user) {
            if (newItem && newItem.action) {
                let item = Object.assign({
                    done: false,
                    deadline: Date.now()
                }, newItem, {
                    userId: user.id
                });

                item.deadline = new Date(item.deadline).getTime();

                let itemIndex = tasksService.indexOfItem(this.editedItem);

                if (itemIndex > -1) {
                    tasksService.replaceTask(itemIndex, item);
                } else {
                    tasksService.addTask(item);
                }
            }
            $location.path('/');
        }

        function resetForm() {
            $route.reload();
        }

        function getTaskId() {
            return parseInt($routeParams['taskId']);
        }

        function getUsers() {
            return usersService.getUsers();
        }
    }

})();