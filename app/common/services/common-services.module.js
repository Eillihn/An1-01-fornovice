(function() {
    'use strict';

    angular.module('commonServices', [])
        .constant('randomSource', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
        .value('rankSymbol', '*')
        .config(rankConfig);

    function rankConfig(rankService3Provider) {
        rankService3Provider.configRankSymbol('+');
    }
})();
