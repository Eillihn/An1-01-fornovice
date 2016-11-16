function todoAppLog($delegate, $filter, appName) {
    let log = $delegate.log;
    $delegate.log = function(msg) {
        var date = $filter('date')(Date.now());
        log(`${date}: ${msg}`);
    };

    let info = $delegate.info;
    $delegate.info = function(msg) {
        var date = $filter('date')(Date.now());
        info(`${date}: ${msg}`);
    };

    let warn = $delegate.warn;
    $delegate.warn = function(msg) {
        var date = $filter('date')(Date.now());
        warn(`${date}: ${msg}`);
    };

    let error = $delegate.error;
    $delegate.error = function(msg) {
        var date = $filter('date')(Date.now());
        error(`${date}: ${msg}`);
    };

    let debug = $delegate.debug;
    $delegate.debug = function(msg) {
        var date = $filter('date')(Date.now());
        debug(`${date}: ${msg}`);
    };

    $delegate.myLog = function(msg) {
        log(`${appName}: ${msg}`);
    };

    return $delegate;
}