(function() {
    'use strict';

    angular.module('todoApp', [])
        .run(runTodoApp)
        .value('model', {
            'user': 'Vitaliy',
            'userPhoto': 'images/VZ.jpg'
        })
        .value("tableColumns", []);

    function runTodoApp($q, $http, todoItemsService, tableConfigService) {

        $q.all([$http.get('todo.json'), $http.get('table-config.json')])
            .then(checkTodoAppData)
            .then(fillTodoAppData)
            .catch(processError);

        function checkTodoAppData([todoListResponse, tableConfigResponse]) {
            let todoList = todoListResponse.data,
                tableColumns = tableConfigResponse.data;

            return $q((resolve, reject) => {
                if (angular.isArray(todoList) && angular.isArray(tableColumns)) {
                    resolve([todoList, tableColumns]);
                } else {
                    reject({
                        data: `Invalid Todo App data.`
                    });
                }
            });
        }

        function fillTodoAppData([todoList, tableColumns]) {
            todoItemsService.setTodoItems(todoList);
            if (tableConfigService.getTableColumns().length === 0) {
                tableConfigService.setTableColumns(tableColumns);
            }
        }

        function processError({data = ''}) {
            console.log(`Something went wrong. ${data}`);
        }

    }

})();
