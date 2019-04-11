var app = angular.module("app",
    [
        "restangular",
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

    app.config(function($stateProvider, $urlRouterProvider) {
        var homeState = {
          name: 'app',
          url: '/',
          component: 'home'
        }
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
              jeu: function( $stateParams, Restangular) {
                var jeu_id = $stateParams.jeuId;
                Restangular.setBaseUrl('https://virtserver.swaggerhub.com/vanessakovalsky/BoardGames/1.0.0');
                getGame = function($jeu_id){
                    var url = '/boardgame/';
                    var game = Restangular.one(url,jeu_id).get();
                    return game;
                }
                var jeu = getGame().$object;
                console.log(jeu);
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
        $stateProvider.state(homeState);
        // the known route, with missing '/' - let's create alias
        $urlRouterProvider.when('', '/');
        // the unknown
        $urlRouterProvider.otherwise('/404');
      });