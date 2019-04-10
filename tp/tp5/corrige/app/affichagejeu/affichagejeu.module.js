angular.module("affichageJeu",[])
    .component("affichageJeu", {
        templateUrl: 'affichagejeu/affichagejeu.template.html',
        bindings: {
            jeu: '<'
        },
        controller: function AffichageJeuController(){
            var vm = this;
            vm.entete = {
                titre: "Détail d'un jeu",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };
        }
    }
    )