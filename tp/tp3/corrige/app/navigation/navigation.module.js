angular.module("navigation",[])
    .component("navigation", {
        templateUrl: 'navigation/navigation.template.html',
        controller: function NavController(){
            var vm = this;
            vm.menu = {
                'accueil' : 'accueil',
                'liste des jeux' : 'listejeux',
                'crééer un jeu' : 'creerjeu',
                'crééer un user' : 'creeruser',
                'contact' : 'contact'
            };
        }
    }
    )