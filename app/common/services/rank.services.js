(function() {
    'use strict';

    angular.module('commonServices')
        .service('rankService1', rankService1)
        .factory('rankService2', rankService2)
        .provider('rankService3', rankService3);

    function rankService1(rankSymbol) {
        this.getRank = getRank;

        function getRank(count) {
            let response = '';

            if (count >= 0 && count < 100) {
                response = rankSymbol;
            } else if (count >= 100 && count < 200) {
                response = rankSymbol.repeat(2);
            } else if (count >= 200 && count < 500) {
                response = rankSymbol.repeat(3);
            } else if (count >= 500 && count < 1000) {
                response = rankSymbol.repeat(4);
            } else if (count >= 1000) {
                response = rankSymbol.repeat(5);
            }
            return response;
        }
    }

    function rankService2(rankSymbol) {

        return {
            getRank
        };

        function getRank(count) {
            let response = '';

            if (count >= 0 && count < 100) {
                response = rankSymbol;
            } else if (count >= 100 && count < 200) {
                response = rankSymbol.repeat(2);
            } else if (count >= 200 && count < 500) {
                response = rankSymbol.repeat(3);
            } else if (count >= 500 && count < 1000) {
                response = rankSymbol.repeat(4);
            } else if (count >= 1000) {
                response = rankSymbol.repeat(5);
            }
            return response;
        }
    }

    function rankService3() {
        let rankSymbolValue = '*';

        return {
            configRankSymbol,
            $get
        };

        function configRankSymbol(newSymbol) {
            if (newSymbol) {
                rankSymbolValue = newSymbol;
                return this;
            } else {
                return rankSymbolValue;
            }
        }

        function $get() {
            return {
                getRank
            };

            function getRank(count) {
                let response = '';

                if (count >= 0 && count < 100) {
                    response = rankSymbolValue;
                } else if (count >= 100 && count < 200) {
                    response = rankSymbolValue.repeat(2);
                } else if (count >= 200 && count < 500) {
                    response = rankSymbolValue.repeat(3);
                } else if (count >= 500 && count < 1000) {
                    response = rankSymbolValue.repeat(4);
                } else if (count >= 1000) {
                    response = rankSymbolValue.repeat(5);
                }
                return response;
            }
        }
    }

})();
