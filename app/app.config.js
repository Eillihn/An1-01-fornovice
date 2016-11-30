(function() {

    angular.module('app')
        .config(configAppRouter);

    function configAppRouter($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
                templateUrl: './feature/tasks/task-list.html',
                resolve: {
                    data: function($q, taskPropertiesService, tasksStorageService, usersStorageService) {
                        return $q.all([
                            taskPropertiesService.getData(),
                            tasksStorageService.getData(),
                            usersStorageService.getData()
                        ]);
                    }
                }
            })
            .when('/users', {
                templateUrl: './feature/users/user-list.html',
                controller: 'UserList',
                controllerAs: '$ctrl',
                resolve: {
                    data: function(usersStorageService) {
                        return usersStorageService.getData();
                    }
                }
            })
            .when('/userTasks/:userId', {
                templateUrl: './feature/tasks/task-list.html',
                resolve: {
                    data: function($q, taskPropertiesService, tasksStorageService, usersStorageService) {
                        return $q.all([
                            taskPropertiesService.getData(),
                            tasksStorageService.getData(),
                            usersStorageService.getData()
                        ]);
                    }
                }
            })
            .when('/createTask', {
                templateUrl: './feature/tasks/task-actions/task-form.html',
                controller: 'TaskForm',
                controllerAs: '$ctrl',
                resolve: {
                    users: function(usersStorageService) {
                        return usersStorageService.getData();
                    },
                    tasks: function(tasksStorageService) {
                        return tasksStorageService.getData();
                    }
                }
            })
            .when('/editTask/:taskId', {
                templateUrl: './feature/tasks/task-actions/task-form.html',
                controller: 'TaskForm',
                controllerAs: '$ctrl',
                resolve: {
                    users: function(usersStorageService) {
                        return usersStorageService.getData();
                    },
                    tasks: function(tasksStorageService) {
                        return tasksStorageService.getData();
                    }
                }
            })
            .when('/deleteTask/:taskId', {
                templateUrl: './feature/tasks/task-actions/delete-task.html',
                controller: 'DeleteTask',
                controllerAs: '$ctrl',
                resolve: {
                    data: function(tasksStorageService) {
                        return tasksStorageService.getData();
                    }
                }
            })
            .when('/createUser', {
                templateUrl: './feature/users/user-actions/user-form.html',
                controller: 'UserForm',
                controllerAs: '$ctrl',
                resolve: {
                    data: function(usersStorageService) {
                        return usersStorageService.getData();
                    }
                }
            })
            .when('/editUser/:userId', {
                templateUrl: './feature/users/user-actions/user-form.html',
                controller: 'UserForm',
                controllerAs: '$ctrl',
                resolve: {
                    data: function(usersStorageService) {
                        return usersStorageService.getData();
                    }
                }
            })
            .when('/deleteUser/:userId', {
                templateUrl: './feature/users/user-actions/delete-user.html',
                controller: 'DeleteUser',
                controllerAs: '$ctrl',
                resolve: {
                    users: function(usersStorageService) {
                        return usersStorageService.getData();
                    },
                    tasks: function(tasksStorageService) {
                        return tasksStorageService.getData();
                    }
                }
            })
            .otherwise('/');
    }

})();