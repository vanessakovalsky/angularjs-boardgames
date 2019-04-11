angular.module("liste",[])
    .component("liste", {
        templateUrl: 'liste/liste.template.html',
        controller: function ListeController(jeuService){
            var vm = this;
            vm.games = jeuService.getGames().$object;
            vm.entete = {
                titre: "Liste des jeux",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };
        }
    }
    )
    .directive("trRow", function() {
        return {
            template: '<tr><td></td></tr>'
        }
    })