var app = angular.module("app",[]);

app.controller("NavController",function(){
    var vm = this;
    vm.menu = {
        'liste des jeux' : 'liste-jeux.html',
        'crééer un jeu' : 'creer-jeu.html',
        'contact' : 'contact.html'
    };
})