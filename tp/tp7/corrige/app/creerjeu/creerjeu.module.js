angular.module("creerjeu",[])
    .component("creerjeu", {
        templateUrl: 'creerjeu/creerjeu.template.html',
        controller: function CreerJeuController(jeuService){
            var vm = this;
            vm.entete = {
                titre: "Créer une fiche jeu",
                texte: "Se connecter pour accéder à l'espace privé",
                bouton: "Participez à notre aventure"
            };
            vm.jeu = {
                name: '',
                editor: ''
            };

            vm.submitJeu = function(){
                console.log('formulaire soumis');
                var nouveau_jeu = {
                    "name": vm.jeu.name,
                    "editor": vm.jeu.editor,
                    "year_published": 1978,
                    "description": "descp",
                    "category": "family",
                    "time": "60min",
                    "number_player": "2-5"
                }

                jeuService.postGame(nouveau_jeu);
            }
        }
    }
    )