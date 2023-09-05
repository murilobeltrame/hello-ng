angular
    .module('taskApp', ['ngRoute', 'app.readme', 'app.about', 'app.tasks'])
    .run(function($rootScope, $location, $window) {
        var kc = new Keycloak('keycloak.json');
        kc.init({onLoad: 'login-required'})
            .then(function(authenticated){
                if (authenticated) {
                    $rootScope.authenticated = true;
                    $rootScope.username = kc.tokenParsed.preferred_username;
                } else {
                    $rootScope.authenticated = false;
                    $window.$location.href = '/login'
                }
            })
            .catch(function (e) {
                console.error('Falha ao inicializar o KC', e);
            })

    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/', { template: '<readme />' })
            .when('/about', { template: '<about />' })
            .when('/tasks', { template: '<tasks />' })
            .otherwise({ redirectTo: '/' })
    });