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
        "connexion"
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
      
        $stateProvider.state(helloState);
        $stateProvider.state(listeState);
        $stateProvider.state(creerjeuState);
        $stateProvider.state(contactState);
        $stateProvider.state(creeruserState);
        $stateProvider.state(connexionState);
      });