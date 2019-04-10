var app = angular.module("app",
    [
        "ui.router",
        "navigation",
        "entete",
        "footerBis",
        "gameCard",
        "home",
        "liste",
        "creerjeu"
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
      
        $stateProvider.state(helloState);
        $stateProvider.state(listeState);
        $stateProvider.state(creerjeuState);

      });