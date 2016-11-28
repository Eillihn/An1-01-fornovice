(function() {

    angular
        .module('users')
        .factory('usersService', usersService);

    function usersService($filter, usersStorageService) {
        let users = [];

        return {
            getUsers,
            getUserName,
            addUser,
            removeUser,
            replaceUser,
            indexOfItem,
            getUser
        };

        function getUsers() {
            return usersStorageService.getUsers();
        }

        function getUserName(userId) {
            if (!userId) {
                return '';
            }

            let users = getUsers(),
                filterUsers = $filter('filter')(users, {
                    id: userId
                }, true);

            if (filterUsers.length) {
                return filterUsers[0].name;
            } else {
                return userId;
            }
        }

        function addUser(item) {
            let items = getUsers();
            item.id = Math.max.apply(Math, items.map((user) => user.id)) + 1;
            items.push(item);
            usersStorageService.setUsers(items);
        }

        function removeUser(item) {
            let items = getUsers(),
                index = items.indexOf(item);

            if (item && index > -1) {
                items.splice(index, 1);
                usersStorageService.setUsers(items);
            }
        }

        function replaceUser(index, item) {
            let items = getUsers();

            items.splice(index, 1, item);
            usersStorageService.setUsers(items);
        }

        function indexOfItem(item) {
            let items = getUsers();

            return items.indexOf(item);
        }

        function getUser(userId) {
            let filterUsers = !Number.isNaN(userId) ? $filter('filter')(getUsers(), {
                id: userId
            }, true) : [{}];

            return filterUsers[0];
        }
    }

})();