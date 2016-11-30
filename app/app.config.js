(function() {

    angular.module('app')
        .config(configAppRouter);

	function configAppRouter($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
		$stateProvider
            .state('home', {
                url: '/',
                template: '<task-list></task-list>',
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
            .state('users', {
                url: '/users',
                template: '<user-list></user-list>',
                resolve: {
                    data: function(usersStorageService) {
                        return usersStorageService.getData();
                    }
                }
            })
            .state('userTasks', {
                url: '/userTasks/:userId',
                template: '<task-list></task-list>',
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
            .state('createTask', {
                url: '/createTask',
                template: '<task-form></task-form>',
                resolve: {
                    users: function(usersStorageService) {
                        return usersStorageService.getData();
                    },
                    tasks: function(tasksStorageService) {
                        return tasksStorageService.getData();
                    }
                }
            })
            .state('editTask', {
                url: '/editTask/:taskId',
                template: '<task-form></task-form>',
                resolve: {
                    users: function(usersStorageService) {
                        return usersStorageService.getData();
                    },
                    tasks: function(tasksStorageService) {
                        return tasksStorageService.getData();
                    }
                }
            })
            .state('deleteTask', {
                url: '/deleteTask/:taskId',
                template: '<delete-task></delete-task>',
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
            .state('createUser', {
                url: '/createUser',
                template: '<user-form></user-form>',
                resolve: {
                    data: function(usersStorageService) {
                        return usersStorageService.getData();
                    }
                }
            })
            .state('editUser', {
                url: '/editUser/:userId',
                template: '<user-form></user-form>',
                resolve: {
                    data: function(usersStorageService) {
                        return usersStorageService.getData();
                    }
                }
            })
            .state('deleteUser', {
                url: '/deleteUser/:userId',
                template: '<delete-user></delete-user>',
                resolve: {
                    users: function(usersStorageService) {
                        return usersStorageService.getData();
                    },
                    tasks: function(tasksStorageService) {
                        return tasksStorageService.getData();
                    }
                }
            });
    }

})();