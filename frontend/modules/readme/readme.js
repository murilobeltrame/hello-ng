angular.module('app.readme', ['ngRoute'])
    .component('readme', {
        templateUrl: 'modules/readme/readme.html',
        controller: 'ReadmeController'
    })
    .controller('ReadmeController', function() {})