angular.module("creeruser",[])
    .component("creeruser", {
        templateUrl: 'creeruser/creeruser.template.html',
        controller: function CreerUserController(){
            var vm = this;
            vm.entete = {
                titre: "Créer un utilisateur",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };
        }
    }
    )