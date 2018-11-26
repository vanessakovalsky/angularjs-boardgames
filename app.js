angular.module("app",[])
 .controller("Index",function($scope){
	$scope.array_games = [{titre:"Jeu", description:"Mon super texte", image:"./img/test.jpg"},
	{titre:"Jeu2", description:"Mon super texte 2", image:"./img/test.jpg"},
	{titre:"Jeu3", description:"Mon super texte 3", image:"./img/test.jpg"}];
	console.log($scope.array_games);
});
