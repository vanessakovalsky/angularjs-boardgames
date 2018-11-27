angular.module('app')
    .config(['$routeProvider',
        function config($routeProvider) {
        $routeProvider.
            when('/liste-games', {
            template: '<collection-jeux></collection-jeux>'
            }).
            when('/jeu/:jeuId', {
            template: '<detail-game></detail-game>'
            }).
            otherwise('/liste-games');
        }
    ]);