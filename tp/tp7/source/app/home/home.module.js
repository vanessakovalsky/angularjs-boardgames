angular.module("home",[])
    .component("home", {
        templateUrl: 'home/home.template.html',
        controller: function HomeController(){
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
                titre: "Accueil",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };        
        }
    }
    )