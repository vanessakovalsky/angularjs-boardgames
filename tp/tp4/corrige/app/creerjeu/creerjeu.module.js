angular.module("creerjeu",[])
    .component("creerjeu", {
        templateUrl: 'creerjeu/creerjeu.template.html',
        controller: function CreerJeuController(){
            var vm = this;
            vm.entete = {
                titre: "Créer une fiche jeu",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };
        }
    }
    )