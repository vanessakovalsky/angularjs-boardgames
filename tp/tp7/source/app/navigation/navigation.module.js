angular.module("navigation",[])
    .component("navigation", {
        templateUrl: 'navigation/navigation.template.html',
        controller: function NavController(){
            var vm = this;
            vm.menu = {
                'Accueil' : 'accueil',
                'Liste des jeux' : 'listejeux',
                'Créér un jeu' : 'creerjeu',
                'Créér un user' : 'creeruser',
                'Contact' : 'contact',
                'Connexion' : 'connexion'
            };
        }
    }
    )