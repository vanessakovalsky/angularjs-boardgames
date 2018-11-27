angular.module('app')
    .config(['$routeProvider',
        function config($routeProvider) {
        $routeProvider.
            when('/liste-games', {
            template: '<collection></collection>'
            }).
            when('/jeu/:jeuId', {
            template: '<detail-game></detail-game>'
            }).
            otherwise('/listes-games');
        }
    ]);