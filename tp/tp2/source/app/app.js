var app = angular.module("app",[]);

app.controller("NavController",function(){
    var vm = this;
    vm.menu = {
        'liste des jeux' : 'liste-jeux.html',
        'crééer un jeu' : 'creer-jeu.html',
        'crééer un jeu2' : 'creer-jeu.html',
        'crééer un jeu3' : 'creer-jeu.html',
        'contact' : 'contact.html'
    };
})