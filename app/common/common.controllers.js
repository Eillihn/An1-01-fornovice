(function() {
    'use strict';

    angular.module('common')
        .controller('RandomGenerator', RandomGenerator)
        .controller('Rank', Rank)
        .controller('FiltersTest', FiltersTest);

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

    function FiltersTest($filter) {
        console.info('Label Case Filter ------------------');
        console.log('myLabelCaseTest - ' + $filter('labelCase')('myLabelCaseTest'));
        console.info('Byte Converter Filter ------------------');
        console.log('2 000 000 000 to Gb - ' + $filter('byteConverter')(2000000000, 'Gb'));
        console.log('10 093 515 to Mb - ' + $filter('byteConverter')(10093515, 'Mb'));
        console.log('95 657 to kb - ' + $filter('byteConverter')(95657, 'kb'));
        console.log('0 to Mb - ' + $filter('byteConverter')(0, 'Mb'));
    }

})();
