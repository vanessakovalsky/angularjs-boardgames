angular.module("liste",[])
    .component("liste", {
        templateUrl: 'liste/liste.template.html',
        controller: function ListeController(){
            var vm = this;
            vm.games = [
                    {
                        id : '1',
                        name : 'Kingdomino'
                    },
                    {
                        id : "2",
                        name : "Splendor"
                    },
                    {
                        id : "3",
                        name : "Zombicide"
                    }
            ]
            console.log(vm.games);
            vm.entete = {
                titre: "Liste des jeux",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };
        }
    }
    )