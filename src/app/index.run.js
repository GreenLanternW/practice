(function() {
  'use strict';

  angular
    .module('practiceGithub')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
