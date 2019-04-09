angular.module("navigation",[])
    .component("navigation", {
        templateUrl: 'navigation/navigation.template.html',
        controller: function NavController(){
            var vm = this;
            vm.menu = {
                'liste des jeux' : 'liste-jeux.html',
                'crééer un jeu' : 'creer-jeu.html',
                'crééer un jeu2' : 'creer-jeu.html',
                'crééer un jeu3' : 'creer-jeu.html',
                'contact' : 'contact.html'
            };
        }
    }
    )