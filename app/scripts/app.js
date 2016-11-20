var app = angular.module('smvsApp', [
	'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ui.bootstrap',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ui.router',
	'oc.lazyLoad',
	'ui.tree',

	'baseApp.controllers',
	'smvsApp.controllers',
	'smvsApp.directives',
	'smvsApp.factory',
	'smvsApp.services',

	// Module wise Controllers & Services
	'smvsApp.masterModule.controllers',
	'smvsApp.masterModule.services'
	// Added in v1.3
	//'FBAngular'
]);

angular.module('smvsApp.controllers', []);
angular.module('smvsApp.directives', []);
angular.module('smvsApp.services', []);
angular.module('smvsApp.factory', []);

angular.module('smvsApp.masterModule.controllers', []);
angular.module('smvsApp.masterModule.services', []);
