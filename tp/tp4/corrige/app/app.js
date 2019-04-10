var app = angular.module("app",
    [
        "ui.router",
        "navigation",
        "entete",
        "footerBis",
        "gameCard",
        "home",
        "liste",
        "creerjeu",
        "contact",
        "creeruser",
        "connexion",
        "affichageJeu"
    ]);

    app.config(function($stateProvider) {
        var helloState = {
          name: 'accueil',
          url: '/accueil',
          component: 'home'
        }
      
        var listeState = {
          name: 'listejeux',
          url: '/liste-jeux',
          component: 'liste'
        }

        var creerjeuState = {
            name: 'creerjeu',
            url: '/creer-jeu',
            component: 'creerjeu'
        }

        var contactState = {
            name: 'contact',
            url: '/contact',
            component: 'contact'
        }

        var creeruserState = {
            name: 'creeruser',
            url: '/creer-user',
            component: 'creeruser'
        }

        var connexionState = {
            name: 'connexion',
            url: '/connexion',
            component: 'connexion'
        }

        var jeuState = { 
            name: 'listejeux.jeu', 
            url: '/{jeuId}', 
            component: 'affichageJeu',
            resolve: {
              jeu: function( $stateParams) {
                var jeu_id = $stateParams.jeuId;
                if(jeu_id == 1){
                    var jeu = {
                        id : '1',
                        name : 'Kingdomino'
                    };
                }
                else if (jeu_id == 2){
                    var jeu = {
                        id : '2',
                        name : 'Splendor'
                    };
                }
                else {
                    var jeu = {
                        id : '3',
                        name : 'Zombicide'
                    };
                }
                return jeu;
              }
            }
          }
      
        $stateProvider.state(helloState);
        $stateProvider.state(listeState);
        $stateProvider.state(creerjeuState);
        $stateProvider.state(contactState);
        $stateProvider.state(creeruserState);
        $stateProvider.state(connexionState);
        $stateProvider.state(jeuState);

      });