angular.module("liste",[])
    .component("liste", {
        templateUrl: 'liste/liste.template.html',
        controller: function ListeController(){
            var vm = this;
            vm.games = {
                '0' : 
                    {
                        'id' : '1',
                        'name' : 'Kingdomino'
                    },
                '1' : 
                    {
                        'id' : "2",
                        'name' : "Splendor"
                    }
            }
            vm.entete = {
                titre: "Liste des jeux",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };
        }
    }
    )