angular.module("collectionJeux",['detailGame'])
    .component("collectionJeux", {
        templateUrl: 'collection/collection.template.html',
        controller: function($http, $scope){
            $http.get('./collection/collection.json').then(
                function(response){
                    $scope.array_games = response.data.body;
                    console.log($scope.array_games);
                },
                function(response){
                    console.log('erreur');
                }
            );
        }
    }
    )
    