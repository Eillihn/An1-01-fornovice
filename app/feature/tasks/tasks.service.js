(function() {
    'use strict';

    angular.module('tasks')
        .factory('tasksService', tasksService);

    function tasksService($filter, $routeParams, usersService, tasksStorageService) {

        return {
            getAllTasks,
            getCompletedTodoItems,
            getIncompletedTodoItems,
            incompleteCount,
            completeCount,
            removeTask,
            replaceTask,
            addTask,
            indexOfItem,
            removeAllCompleted,
            getTasks,
            getUserName,
            getTask
        };

        function getAllTasks() {
            return tasksStorageService.getTasks();
        }

        function getCompletedTodoItems() {
            return $filter('filter')(getTasks(), {
                done: true
            });
        }

        function getIncompletedTodoItems() {
            return $filter('filter')(getTasks(), {
                done: false
            });
        }

        function incompleteCount() {
            return getIncompletedTodoItems().length;
        }

        function completeCount() {
            return getCompletedTodoItems().length;
        }

        function removeTask(item) {
            let items = getAllTasks(),
                index = items.indexOf(item);

            if (item && index > -1) {
                items.splice(index, 1);
                tasksStorageService.setTasks(items);
            }
        }

        function replaceTask(index, item) {
            let items = getAllTasks();

            items.splice(index, 1, item);
            tasksStorageService.setTasks(items);
        }

        function addTask(item) {
            let items = getAllTasks();
            item.id = Math.max.apply(Math, items.map((task) => task.id)) + 1;
            items.push(item);
            tasksStorageService.setTasks(items);
        }

        function indexOfItem(item) {
            let items = getAllTasks();

            return items.indexOf(item);
        }

        function removeAllCompleted() {
            let items = getAllTasks();
            let completedItems = getCompletedTodoItems();

            angular.forEach(completedItems, (item) => {
                removeTask(item);
            });
        }

        function getTasks() {
            let userId = parseInt($routeParams['userId']),
                tasks = getAllTasks();

            return !Number.isNaN(userId) ? $filter('filter')(tasks, {
                userId: userId
            }, true) : tasks;
        }

        function getUserName(userId = parseInt($routeParams['userId'])) {
            return usersService.getUserName(userId);
        }

        function getTask(taskId) {
            let filterTasks = !Number.isNaN(taskId) ? $filter('filter')(getAllTasks(), {
                id: taskId
            }, true) : [{}];

            return filterTasks[0];
        }

    }
})();