angular.module("creerjeu",[])
    .component("creerjeu", {
        templateUrl: 'creerjeu/creerjeu.template.html',
        controller: function CreerJeuController(Restangular){
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
            console.log(vm.jeu.name);

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
                Restangular.setBaseUrl('https://virtserver.swaggerhub.com/vanessakovalsky/BoardGames/1.0.0');
                var postGame = function($nouveau_jeu){  
                    var games = Restangular.all('/boardgame');
                    new_game = games.post(nouveau_jeu).then(function() {
                        console.log("Object saved OK");
                      }, function() {
                        console.log("There was an error saving");
                      });
                }
                postGame();
            }
        }
    }
    )