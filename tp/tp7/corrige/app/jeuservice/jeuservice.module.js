angular.module('services',[])
        .factory('jeuService', function(Restangular) {
            var jeuService = {};
            Restangular.setBaseUrl('https://virtserver.swaggerhub.com/vanessakovalsky/BoardGames/1.0.0');
            jeuService.getGames = function(){
                var games = Restangular.all('/boardgame/findByStatus?status=available&status=pending&status=sold');
                games_list = games.getList();
                return games_list;
            }
            jeuService.getGame = function(jeu_id){
                var url = '/boardgame/';
                var game = Restangular.one(url,jeu_id).get();
                return game;
            }
            jeuService.postGame = function(nouveau_jeu){  
                var games = Restangular.all('/boardgame');
                new_game = games.post(nouveau_jeu).then(function() {
                    console.log("Object saved OK");
                  }, function() {
                    console.log("There was an error saving");
                  });
            }
            return jeuService;
        })