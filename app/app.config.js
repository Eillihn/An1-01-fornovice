(function() {

    angular.module('app')
        .config(configAppRouter);

	function configAppRouter($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
		$stateProvider
            .state('home', {
                url: '/',
                template: `<task-list
                                users='$resolve.users'
                                tasks='$resolve.tasks'
                                on-update='$ctrl.updateTasks(tasks)'>
                            </task-list>`,
                resolve: {
                    tasks: function(tasksSrv) {
                        return tasksSrv.getTasks();
                    },
                    users: function(usersSrv) {
                        return usersSrv.getUsers();
                    },
                    taskProperties: function(taskPropertiesService) {
                        return taskPropertiesService.getData();
                    }
                }
            })
            .state('users', {
                url: '/users',
                template: `<user-list users='$resolve.users'></user-list>`,
                resolve: {
                    users: function(usersSrv) {
                        return usersSrv.getUsers();
                    }
                }
            })
            .state('userTasks', {
                url: '/userTasks/:userId',
                template: `<task-list users='$resolve.users'
                                tasks='$resolve.tasks'
                                user='$resolve.user'>
                            </task-list>`,
                resolve: {
                    tasks: function(tasksSrv, $stateParams) {
                        return tasksSrv.getUserTasks($stateParams['userId']);
                    },
                    users: function(usersSrv) {
                        return usersSrv.getUsers();
                    },
                    taskProperties: function(taskPropertiesService) {
                        return taskPropertiesService.getData();
                    },
                    user: function(usersSrv, $stateParams) {
                        return usersSrv.getUserById($stateParams['userId']);
                    }
                }
            })
            .state('createTask', {
                url: '/createTask',
                template: `<task-form users='$resolve.users'
                                on-save="$ctrl.createTask(task)">
                            </task-form>`,
                resolve: {
                    users: function(usersSrv) {
                        return usersSrv.getUsers();
                    }
                }
            })
            .state('editTask', {
                url: '/editTask/:taskId',
                template: `<task-form
                                users='$resolve.users'
                                task='$resolve.task'
                                on-save="$ctrl.updateTask(task)">
                            </task-form>`,
                resolve: {
                    users: function(usersSrv) {
                        return usersSrv.getUsers();
                    },
                    task: function(tasksSrv, $stateParams) {
                        return tasksSrv.getTaskById($stateParams['taskId']);
                    }
                }
            })
            .state('deleteTask', {
                url: '/deleteTask/:taskId',
                template: `<delete-task task='$resolve.task'
                                user='$resolve.user'
                                on-delete="$ctrl.deleteTask($resolve.task)">
                            </delete-task>`,
                resolve: {
                    task: function(tasksSrv, $stateParams) {
                        return tasksSrv.getTaskById($stateParams['taskId']);
                    },
                    user: function(usersSrv, task, $q) {
                        return usersSrv.getUserById(task.userId)
                                        .catch(() => { return $q.resolve({}); });
                    },
                    taskProperties: function(taskPropertiesService) {
                        return taskPropertiesService.getData();
                    }
                }
            })
            .state('createUser', {
                url: '/createUser',
                template: `<user-form on-save='$ctrl.createUser(user)'></user-form>`
            })
            .state('editUser', {
                url: '/editUser/:userId',
                template: `<user-form
                                user='$resolve.user'
                                on-save="$ctrl.updateUser(user)">
                            </user-form>`,
                resolve: {
                    user: function(usersSrv, $stateParams) {
                        return usersSrv.getUserById($stateParams['userId']);
                    }
                }
            })
            .state('deleteUser', {
                url: '/deleteUser/:userId',
                template: `<delete-user
                                user='$resolve.user'
                                user-tasks='$resolve.userTasks'
                                on-delete="$ctrl.deleteUser($resolve.user)">
                            </delete-user>`,
                resolve: {
                    user: function(usersSrv, $stateParams) {
                        return usersSrv.getUserById($stateParams['userId']);
                    },
                    userTasks: function(tasksSrv, $stateParams) {
                        return tasksSrv.getUserTasks($stateParams['userId']);
                    }
                }
            });
    }

})();