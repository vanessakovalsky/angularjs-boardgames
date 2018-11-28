angular.module("collectionJeux",[])
    .component("collectionJeux", {
        templateUrl: 'collection/collection.template.html',
        controller: ['$http','$scope','serviceGames', function($http, $scope, serviceGames){
            /*$http.get('./collection/collection.json').then(
                function(response){
                    $scope.array_games = response.data.body;
                    console.log($scope.array_games);
                },
                function(response){
                    console.log('erreur');
                }
            );*/
            $scope.array_games = serviceGames.array_games;
        }]
    }
    )
    