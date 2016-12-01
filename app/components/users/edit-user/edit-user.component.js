(function() {
    'use strict';

    angular.module('components')
        .component('userForm', {
            templateUrl: './components/users/edit-user/edit-user.html',
            controller: 'UserForm',
            bindings: {
                user: '<',
                onSave: '&'
            }
        });

})();