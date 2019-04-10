angular.module("connexion",[])
    .component("connexion", {
        templateUrl: 'connexion/connexion.template.html',
        controller: function ConnexionController(){
            var vm = this;
            vm.entete = {
                titre: "Connexion",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };
        }
    }
    )