angular.module("liste",[])
    .component("liste", {
        templateUrl: 'liste/liste.template.html',
        controller: function ListeController(Restangular){
            var vm = this;
            Restangular.setBaseUrl('https://virtserver.swaggerhub.com/vanessakovalsky/BoardGames/1.0.0');
            vm.getGames = function(){
                var games = Restangular.all('/boardgame/findByStatus?status=available&status=pending&status=sold');
                games_list = games.getList();
                return games_list;
            }
            vm.games = vm.getGames().$object;
            vm.entete = {
                titre: "Liste des jeux",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };
        }
    }
    )