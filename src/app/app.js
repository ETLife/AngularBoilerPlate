(function () {
    angular.module('MODULE_NAME', ['ngRoute', 'ngSanitize']);

    function config ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                    redirectTo: '/'
            });
        $locationProvider.html5Mode(true)
        .hashPrefix('');
    }

    angular
        .module('MODULE_NAME')
        .config(['$routeProvider', '$locationProvider', config]);
})();
