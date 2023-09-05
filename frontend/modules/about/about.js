angular.module('app.about', ['ngRoute'])
    .component('about', {
        templateUrl: 'modules/about/about.html',
        controller: 'AboutController'
    })
    .controller('AboutController', function() {})