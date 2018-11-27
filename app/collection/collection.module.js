angular.module("collectionJeux",['detailGame'])
    .component("collectionJeux", {
        templateUrl: 'collection/collection.template.html',
        controller: function(){
            this.array_games = [
            {description:'Jeu 1', image:'img/test.jpg', editeur: "Asmodée"},
            {description:'Jeu 2', image:'img/test.jpg', editeur: "Hasbro"},
            ];
        }
    }
    )
    