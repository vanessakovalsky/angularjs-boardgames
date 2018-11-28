angular.module("collectionJeux",['detailGame'])
    .component("collectionJeux", {
        templateUrl: 'collection/collection.template.html',
        controller: function(){
            this.array_games = [
            {titre:'Jeu 1', description:'Jeu 1', image:'img/test.jpg', editeur: "Asmodée"},
            {titre:'Jeu 2', description:'Jeu 2', image:'img/test.jpg', editeur: "Hasbro"},
            ];
        }
    }
    )
    