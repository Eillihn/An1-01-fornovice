(function() {
    'use strict';

    angular.module('components')
        .component('userList', {
            templateUrl: './components/users/user-list/user-list.html',
            bindings: {
                users: '<',
                usersTasks: '<',
                onDelete: '&'
            },
            controller: function(stateRouter) {
                let $ctrl = this;

                $ctrl.navigate = stateRouter.navigate;
            }
        });

})();