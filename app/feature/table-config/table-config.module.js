(function() {
    "use strict";

    angular.module("tableConfig", [])
        .value("tableColumns", [{
                "name": "number",
                "visible": true
            },{
                "name": "action",
                "visible": true
            },{
                "name": "done",
                "visible": true
            },{
                "name": "responsible",
                "visible": true
            },{
                "name": "deadline",
                "visible": true
            },{
                "name": "estimate",
                "visible": true
            },{
                "name": "commands",
                "visible": true
            }]);

})();
