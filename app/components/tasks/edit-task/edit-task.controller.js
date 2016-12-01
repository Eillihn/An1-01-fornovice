(function() {
    'use strict';

    angular.module('components')
        .controller('TaskForm', TaskForm);

    function TaskForm($state) {
        let $ctrl = this;

        $ctrl.user = {
            _id: {
                $oid: !!$ctrl.task ? $ctrl.task.userId : ''
            }
        };

        $ctrl.saveTask = saveTask;
        $ctrl.resetForm = resetForm;

        function saveTask(newTask, user) {
            let task = Object.assign({
                done: false,
                deadline: Date.now()
            }, newTask, {
                userId: user._id.$oid
            });

            task.deadline = new Date(task.deadline).getTime();

            $ctrl.onSave({task}).then(() => $state.go('home')).catch((error) => console.log(error));
        }

        function resetForm() {
            $state.reload();
        }
    }

})();