angular.module("collectionJeux",[])
    .controller("Index", function($scope){
        $scope.array_games = [
            {description:'Jeu 1', image:'img/test.jpg'}
        ];
    })