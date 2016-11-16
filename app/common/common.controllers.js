(function() {
    'use strict';

    angular.module('common')
        .controller('RandomGenerator', RandomGenerator)
        .controller('Rank', Rank);

    function RandomGenerator(randomGeneratorService, $log) {
        $log.info('Random Generator Service ------------------');
        $log.log(randomGeneratorService.generate(5));
        $log.log(randomGeneratorService.generate(10));
        $log.log(randomGeneratorService.generate(15));
    }

    function Rank(rankService1, rankService2, rankService3, $log) {
        $log.info('Rank Service ------------------');
        $log.log('20 - ' + rankService1.getRank(20));
        $log.log('125 - ' + rankService1.getRank(125));
        $log.log('500 - ' + rankService1.getRank(500));

        $log.info('Rank Factory ------------------');
        $log.log('20 - ' + rankService2.getRank(20));
        $log.log('125 - ' + rankService2.getRank(125));
        $log.log('500 - ' + rankService2.getRank(500));

        $log.info('Rank Provider ------------------');
        $log.log('20 - ' + rankService3.getRank(20));
        $log.log('125 - ' + rankService3.getRank(125));
        $log.log('500 - ' + rankService3.getRank(500));

        $log.info('Test $log ------------------');
        $log.log('log');
        $log.info('info');
        $log.warn('warn');
        $log.error('error');
        $log.debug('debug');
        $log.myLog('myLog');
    }

})();
